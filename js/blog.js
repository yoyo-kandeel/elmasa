
    // إعدادات الترقيم
              const totalPages = 10;
              let currentPage = 1;

              function renderPagination() {
              const pagination = document.getElementById('pagination');
              pagination.innerHTML = '';

              // زر السابق (سهم يمين)
              const prevLi = document.createElement('li');
              prevLi.className = 'page-item' + (currentPage === 1 ? ' disabled' : '');
              prevLi.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><i class="fa fa-angle-right"></i></a>`;
              prevLi.onclick = function(e) {
                e.preventDefault();
                if (currentPage > 1) {
                currentPage--;
                renderPagination();
                }
              };
              pagination.appendChild(prevLi);

              // صفحات البداية
              for (let i = 1; i <= Math.min(2, totalPages); i++) {
                addPageItem(i);
              }

              // نقاط الحذف
              if (currentPage > 4) {
                addDots();
              }

              // صفحات حول الصفحة الحالية
              for (let i = Math.max(3, currentPage - 1); i <= Math.min(totalPages - 2, currentPage + 1); i++) {
                if (i > 2 && i < totalPages - 1) addPageItem(i);
              }

              // نقاط الحذف
              if (currentPage < totalPages - 3) {
                addDots();
              }

              // صفحات النهاية
              for (let i = Math.max(totalPages - 1, 3); i <= totalPages; i++) {
                if (i > 2) addPageItem(i);
              }

              // زر التالي (سهم يسار)
              const nextLi = document.createElement('li');
              nextLi.className = 'page-item' + (currentPage === totalPages ? ' disabled' : '');
              nextLi.innerHTML = `<a class="page-link" href="#" aria-label="Next"><i class="fa fa-angle-left"></i></a>`;
              nextLi.onclick = function(e) {
                e.preventDefault();
                if (currentPage < totalPages) {
                currentPage++;
                renderPagination();
                }
              };
              pagination.appendChild(nextLi);

              // دالة لإضافة عنصر صفحة
              function addPageItem(page) {
                const li = document.createElement('li');
                li.className = 'page-item' + (page === currentPage ? ' active' : '');
                li.innerHTML = `<a class="page-link" href="#">${page}</a>`;
                li.onclick = function(e) {
                e.preventDefault();
                currentPage = page;
                renderPagination();
                };
                pagination.appendChild(li);
              }

              // دالة لإضافة نقاط الحذف
              function addDots() {
                const li = document.createElement('li');
                li.className = 'page-item disabled';
                li.innerHTML = `<span class="page-link">...</span>`;
                pagination.appendChild(li);
              }
              }

              // أول تحميل
            renderPagination();


    