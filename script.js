const customvar = `
<style>
  body {
    margin: 0;
    }
    
    .leftside{
      background-color:#fff ;
      width: 25%;
      float: left;
      padding-top: 20px;
    }
    .right
    { width: 75%;
      float :right;
      background-color:#f8f9fd ;
    }
    
    .up{
      display: flex;
       align-items: center;
      gap: 910px;
      margin-left: 100px;
      padding-top: 20px;
    }
    
    .name{
      display: flex;
       align-items: center;
      gap: 10px;
      font-size: 22px;
      font-style: italic;
    
    }
    
    .circle {
        width: 50px;
        height: 50px;
        background-color: #3619c8;
        border-radius: 50%;
        box-shadow: inset 0px 40px 30px rgb(233, 221, 221, 0.25); 
    }
    .container{
      display: grid;
      place-items: center;
       width: 75%;
      background-color: #fff; 
      border-radius: 20px 20px 20px 20px; 
    margin-left: 90px;
      margin-top: 35px;
      margin-bottom: 50px;
      padding: 40px 20px 60px 60px;
    }
    
    
    table {
    
      border-collapse: collapse;
      background-color: #fff;
      margin: 10px 0;
     font-size:20px ;
    
    }
    
    th, td {
      padding: 20px 40px;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }
    
    th {
    color:gray
    }
    
    p {
        margin: 0 10px;
    }
    .rounded-rectangle {
       width: 150px;
      height: 100px;
        background-color: lightgrey;
        border-radius: 30px 30px 30px 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-family: Arial, sans-serif;
      font-size: 11px;
    }
    .sec1 , .sec2{
    display: flex;
     align-items: center;
    gap: 20px;
    }
  
    .abovetable{
    
      margin-bottom: 10px;
    display: flex;
     align-items: center;
       gap: 90px;
    
    }
    
    .abovetable .rounded-rectangle{
    border-radius: 8px 8px 8px 8px ;
     height: 30px;
    border: 2px solid #e1e1e1;
    color:grey;
    
    }
    .abovetable .nc{
    background-color:#8691a2;
    color:white;
    font-size:large;
    }
    .abovetable .created{
      width:120px;
      background-color:#1aa053 ; 
       color: white;
      padding:0 5px;
    
    }
    
    
    .abovetable .created .nc{
       margin-left: 10px;
      background-color:#024002 ;
    }
    .abovetable .failed{
      width:120px;
      background-color:#c01b1b ; 
       color: white;
       padding:0 5px;
    }
    .abovetable .failed .nc{
       margin-left: 10px;
      background-color:#860909 ;
    }
    
    .abovetable .existing{
      width:200px;
      background-color:#d38f0c ; 
       color: white;
       padding:0 5px;
    }
    .abovetable .existing .nc{
      margin-left: 10px;
      background-color:#8c8c0d ;
    }
    
    .undertable{
       display: flex;
       align-items: center;
      gap: 460px;
      margin: 10px 0;
    
      
    }
    
    .num , .pg{
       display: flex;
       align-items: center;
      gap: 5px;
    }
    .nc{
      width: 30px;
        height: 30px;
       background-color: #ebeefd;
      border-radius: 10px 10px 10px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      font-size: 16px;
    
    }
    .created{
      width: 85px;
      height: 30px;
      background-color:#dcf0e5 ; 
      color: #1aa053;
      border-radius: 10px 10px 10px 10px;
      border: 2px solid #1aa053;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-family: Arial, sans-serif;
      font-size: 16px;
       }
    
    .failed{
      width: 85px;
      height: 30px;
       border-radius: 10px 10px 10px 10px; 
      background-color: #f5e2e0 ; 
      border: 2px solid #c01b1b;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-family: Arial, sans-serif;
      font-size: 16px;
      color: #c01b1b;
    }
    
    .tool p{
      font-size: 30px;
    font-weight: bold;
    }
    .existing{
      color: #b69f1b;
    
      width: 85px;
      height: 30px;
      background-color: #f8eeda ; 
      border-radius: 10px 10px 10px 10px; 
      border: 2px solid #b69f1b;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-family: Arial, sans-serif;
      font-size: 16px;
    }
    
    
    
    button {
      width: 200px; 
      height: 50px; 
      background-color: #303bd5; 
      border-radius: 10px; 
      border-color: white;
      display: flex; 
      justify-content: center; 
      align-items: center; 
      text-align: center; 
      font-family: Arial, sans-serif; 
      font-size: 19px;
      color: white; 
      margin: 100px 40px;
    }
    .tool{
      margin : 20px 10px;
      font-size: x-large;
       margin-left: 50px;
    }
    
    .leftside .nc
    {
    
      width: 50px;
      height: 50px;
      border-radius: 50px 50px 50px 50px;
     
    
    }
    .s1 p{
      color: #999999;
      font-size: 28px;
    }
    
    .s1 {
    

  display: flex;
  align-items: center;
 gap: 10px;

}
.col{
  margin : 30px 10px;
 display: flex; 
 flex-direction: column;
gap :80px;
 margin-left : 60px;


}
.divider {
 width: 3px; 
 height: 100px; 
 background-color: #ccc; 
 margin: 0 25px; 
}

button:hover{
 background-color: #03036d;
}
.active{
 color:white;
 background-color: #00008B;
}

.num .nc:hover  {
 color:white;
 background-color: #b4bff9;
}

</style>

<div class="all">
  <div class="leftside">
    <div class="tool">
      <p>🔘 User Creation Tool</p>
    </div>

    <div class="col">
      <div class="s1">
        <div class="nc">1</div>
        <p>Fill In Data</p>
      </div>
      <div class="divider"></div>

      <div class="s1">
        <div class="nc">2</div>
        <p>Processing</p>
      </div>
      <div class="divider"></div>

      <div class="s1">
        <div class="nc active">3</div>
        <p>View & Download Results</p>
      </div>
    </div>

    <button>+ New request</button>
  </div>

  <div class="right">
    <div class="up">
      <p style="font-size:1cm;">Results</p>
      <div class="name">
        <div class="circle"></div>
        <p>Name Name</p>
      </div>
    </div>

    <div class="container">
      <div class="abovetable">
        <div class="sec1">
          <div class="created">
            created 
            <div class="nc">27</div>
          </div>

          <div class="failed">
            failed
            <div class="nc">5</div>
          </div>

          <div class="existing">
            Already Existing
            <div class="nc">8</div>
          </div>
        </div>

        <div class="sec2">
          <div class="rounded-rectangle">🔍Search by national ID</div>
          <div class="nc">⬇</div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>name</th>
            <th>mobile No</th>
            <th>date of birth</th>
            <th>national ID</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>

      <div class="undertable">
        <p style="color:#C0C0C0;font-size:20px;">showing data 1 to 8 of 2K created users</p>
        <div class="num">
          <div class="nc" id="prev"><</div>
          <div class="pg" id="pagination"></div>
          <div class="nc" id="next">></div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

// custom elememt ///////////////////////////////////////////////////////////////////////////////////////////////
class CustomElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = customvar;
    
  }
  connectedCallback() {
    jsfunction();
}
}

customElements.define('custom-element', CustomElement);



// javascript code /////////////////////////////////////////////////////////////////////////////////////////
function jsfunction() {
    const allData = [
        { id: "ID000", name: "name1", mobile: "01100000000", dob: "1/1/1990", nationalID: "00000000000000", status: "created" },
        { id: "ID001", name: "name2", mobile: "01100000000", dob: "1/1/1990", nationalID: "00000000000000", status: "failed" },
        { id: "ID002", name: "name3", mobile: "01100000000", dob: "1/1/1990", nationalID: "00000000000000", status: "Existing" },
        { id: "ID003", name: "name4", mobile: "01100000000", dob: "1/1/1990", nationalID: "00000000000000", status: "created" },
        { id: "ID004", name: "name5", mobile: "01100000000", dob: "1/1/1990", nationalID: "00000000000000", status: "created" },
        { id: "ID005", name: "name6", mobile: "01100000000", dob: "1/1/1990", nationalID: "00000000000000", status: "created" },
        { id: "ID006", name: "name7", mobile: "01100000000", dob: "1/1/1990", nationalID: "00000000000000", status: "created" },
        { id: "ID007", name: "name8", mobile: "01100000000", dob: "1/1/1990", nationalID: "00000000000000", status: "failed" }
    ];

    function generateAdditionalRows(startIndex, totalCount) {
        const currentCount = allData.length;
        const additionalCount = totalCount - currentCount;
    
        for (let i = 0; i < additionalCount; i++) {
            const newIndex = startIndex + i;
            const newEntry = {
                id: `ID${String(newIndex).padStart(3, '0')}`,
                name: `name${newIndex + 1}`,
                mobile: `01100000000`,
                dob: "1/1/1990",
                nationalID: "00000000000000",
                status: getRandomStatus()       
             };
            allData.push(newEntry);
        }
    }

    function getRandomStatus() {
        const statuses = ["created", "failed", "existing"];
        const randomIndex = Math.floor(Math.random() * statuses.length);
        return statuses[randomIndex];
    }
    
    generateAdditionalRows(8, 80);
    
    const rowsPerPage = 8;
    const shadowRoot = document.querySelector('custom-element').shadowRoot;
    const tbody = shadowRoot.querySelector("tbody");
    const pagination = shadowRoot.querySelector("#pagination");
    const prevButton = shadowRoot.querySelector('#prev');
    const nextButton = shadowRoot.querySelector('#next');
      
    function loadTableData(page) {
        tbody.innerHTML = ""; 
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const pageData = allData.slice(start, end);
        pageData.forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${row.id}</td>
                <td>${row.name}</td>
                <td>${row.mobile}</td>
                <td>${row.dob}</td>
                <td>${row.nationalID}</td>
                <td><div class="${row.status.toLowerCase()}"><p>${row.status}</p></div></td>
            `;
            tbody.appendChild(tr);
        });
    }
    
    loadTableData(1); //by default
    
    const totalPages = 40;
    const maxVisibleButtons = 5; 
    let currentStartPage = 1;
    
    function createPaginationButtons(start) {
        pagination.innerHTML = ''; 
        start = Math.max(1, start);
    
        for (let i = start; i < start + maxVisibleButtons - 1 && i < totalPages; i++) {
            const pageButton = document.createElement('div');
            pageButton.className = 'nc';
            pageButton.textContent = i;
            pageButton.setAttribute('data-page', i);
    
            if (i === currentStartPage) {
                pageButton.classList.add('active');
            }
    
            pagination.appendChild(pageButton);
        }
    
        if (start + maxVisibleButtons - 1 < totalPages) {
            const dots = document.createElement('div');
            dots.className = 'dots';
            dots.textContent = '..';
            pagination.appendChild(dots);
        }
    
        const lastPageButton = document.createElement('div');
        lastPageButton.className = 'nc';
        lastPageButton.textContent = totalPages;
        lastPageButton.setAttribute('data-page', totalPages);
    
        if (currentStartPage === totalPages) {
            lastPageButton.classList.add('active');
        }
    
        pagination.appendChild(lastPageButton);
    }
    
    function updateActivePage(newPage) {
        currentStartPage = newPage;
        shadowRoot.querySelector('.pg .nc.active').classList.remove('active');
        pagination.querySelector(`[data-page='${newPage}']`).classList.add('active');
    }
    
    createPaginationButtons(currentStartPage); // by default 
    
    prevButton.addEventListener('click', () => {
        if (currentStartPage > 1) {
            currentStartPage--;
            if (currentStartPage < pagination.firstChild.getAttribute('data-page')) {
                createPaginationButtons(currentStartPage);
            }
            loadTableData(currentStartPage);  
            updateActivePage(currentStartPage);
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentStartPage < totalPages) {
            currentStartPage++;
            if (currentStartPage >= pagination.lastChild.previousSibling.previousSibling.getAttribute('data-page')) {
                createPaginationButtons(currentStartPage -( maxVisibleButtons - 2));
            }
            loadTableData(currentStartPage) ;                  
            updateActivePage(currentStartPage);
        }
    });
    
    pagination.addEventListener('click', (e) => {
        if (e.target.classList.contains('nc')) {
            const newPage = parseInt(e.target.getAttribute('data-page'));
            loadTableData(newPage);  
            updateActivePage(newPage);
        }
    });
}
