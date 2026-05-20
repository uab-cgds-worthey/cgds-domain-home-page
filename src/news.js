(function () {
    var api =
        "https://sites.uab.edu/cgds/wp-json/wp/v2/posts?per_page=5&_fields=title,link,date";
    var root = document.getElementById("news-root");
    if (!root) return;

    function plainTitle(rendered) {
        var d = document.createElement("div");
        d.innerHTML = rendered;
        return (d.textContent || "").trim();
    }

    /** WordPress returns local datetime without TZ; use YYYY-MM-DD only for stable display. */
    function formatPostDate(dateStr) {
        if (!dateStr || typeof dateStr !== "string") return "";
        var dayPart = dateStr.slice(0, 10);
        var parts = dayPart.split("-");
        if (parts.length !== 3) return "";
        var y = parseInt(parts[0], 10);
        var m = parseInt(parts[1], 10) - 1;
        var day = parseInt(parts[2], 10);
        if (isNaN(y) || isNaN(m) || isNaN(day)) return "";
        var dt = new Date(y, m, day);
        return dt.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        });
    }

    function renderFallback() {
        root.innerHTML = "";
        var p = document.createElement("p");
        p.className = "news-fallback";
        var a = document.createElement("a");
        a.href = "https://sites.uab.edu/cgds/";
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = "Read the latest news on the CGDS website";
        p.appendChild(a);
        root.appendChild(p);
    }

    fetch(api)
        .then(function (res) {
            if (!res.ok) throw new Error("bad status");
            return res.json();
        })
        .then(function (posts) {
            if (!Array.isArray(posts) || posts.length === 0) {
                renderFallback();
                return;
            }

            var ul = document.createElement("ul");
            ul.className = "news-list";

            posts.forEach(function (post) {
                var li = document.createElement("li");
                li.className = "news-item";
                var dateLabel = formatPostDate(post.date);
                if (dateLabel) {
                    var timeEl = document.createElement("time");
                    timeEl.className = "news-item-date";
                    timeEl.dateTime = post.date.slice(0, 10);
                    timeEl.textContent = dateLabel;
                    li.appendChild(timeEl);
                }
                var a = document.createElement("a");
                a.className = "news-item-link";
                a.href = post.link;
                a.target = "_blank";
                a.rel = "noopener noreferrer";
                a.textContent = plainTitle(post.title.rendered);
                li.appendChild(a);
                ul.appendChild(li);
            });

            var moreWrap = document.createElement("p");
            moreWrap.className = "news-more-wrap";
            var more = document.createElement("a");
            more.className = "news-more";
            more.href = "https://sites.uab.edu/cgds/";
            more.target = "_blank";
            more.rel = "noopener noreferrer";
            more.textContent = "All news";
            moreWrap.appendChild(more);

            root.innerHTML = "";
            root.appendChild(ul);
            root.appendChild(moreWrap);
        })
        .catch(function () {
            renderFallback();
        });
})();
