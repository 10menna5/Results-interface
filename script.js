
const customvar=`
<style>
  
.leftside
{
    width: 25%;
    float: left;
    padding-top: 20px;
  }
  
  .nc{
    width: 40px;
      height: 35px;
     background-color: #def1f7;
    border-radius: 10px 10px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    font-size: 16px;
  }
  .tool{
    margin : 20px 10px;
    font-size: x-large;
     margin-left: 50px;
  }
  .tool p{
    font-size: 30px;
  font-weight: bold;
  }
  .button {
    width: 200px; 
    height: 50px; 
    background-color: #303bd5; 
    border-radius: 10px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    text-align: center; 
    font-family: Arial, sans-serif; 
    font-size: 19px;
    color: white; 
    margin:100px 40px;
  }
  
  
  .s1 .nc
  {
  
    width: 50px;
    height: 50px;
    border-radius: 50px 50px 50px 50px;
  
  
  }
  .s1 p{
    color: grey;
  }
  
  .s1 {
  
    display: flex;
     align-items: center;
    gap: 10px;
  
  }
  .col
  {
     margin : 20px 10px;
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
  
  
  
  
  
  
  .right{
    width: 75%;
    float :right;
    background-color: #f8f9fd;}
  
  .up{
    display: flex;
     align-items: center;
    gap: 910px;
    margin-left: 100px;
    padding-top: 15px;
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
    margin-top: 100;
    margin-bottom: 50px;
    padding: 40px 20px 60px 60px;
  }
  
  
  .rounded-rectangle {
    width: 200px;
    height: 100px;
    background-color: #ebebeb;
    border-radius: 30px 30px 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 12px;
  }
  .sec1 , .sec2{
  display: flex;
   align-items: center;
  gap: 20px;
  }
  .abovetable{
  
  margin-left: 130px;
    margin-bottom: 40px;
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
  
  
  .greybox{
    width: 155px;
    height: 28px;
    background-color: #e1e1e1;
    border-radius: 30px 30px 30px 30px;
  
  }
  .abovetable2{
    display: flex;
               align-items: center;
                 gap: 480px;
    margin-bottom: 40px;
  
  }
  
  #long{
    width: 400px;
    height: 15px;
   
  }
  
  .abovetable3
  {   display: flex;
  
    align-items: center;
                 gap: 130px;
    margin-bottom: 20px;
  }
  
  .abovetable3 .greybox{
    width: 60px;
    height: 25px;
}
  
  table {
    width: 60%;
    border-collapse: collapse;
    background-color: #fff;
    margin-bottom: 20px;
  }
  
  th, td {
    padding: 20px 15px ;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  
  table .greybox{
    width: 150px;
    height: 16px;
  }
  .undertable{
    
    display: flex;
  
    align-items: center;
                 gap: 10px;
    margin-bottom: 20px;
    margin-left: 460px;
  }
  
  #se1{
    width: 250px;
    height: 16px;
  }
  #se2{
    width: 180px;
    height: 16px;
  }
  #se3{
    width: 40px;
    height: 40px;
  
  }
  .undertable2{
  
    display: flex;
  
    align-items: center;
                 gap: 200px;
    margin-top: 140px;
  }
  .undertable2 .greybox{
    width: 400px;
    height: 15px;
  }
  
</style>

<div class="all">


  <div class="leftside">

                <div class="tool" >
                   <p >🔘 User Creation Tool </p>
                </div>


               <div class="col" >

              <div class="s1">
     <div class="nc" >1</div>
     <p>Fill In Data</p>
  </div>
                    <div class="divider"></div>

               <div class="s1">
                  <div class="nc" >2</div>
                  <p>Processing</p>
               </div>
                    <div class="divider"></div>

               <div class="s1">
                   <div class="nc"  style="background-color: #344ed1; color: white" >3</div>
                   <p>View & Download Results</p>
                </div>
              </div>

           <div class="button">
     + New request
            </div>


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

               <div class="greybox"></div>
               <div class="greybox"></div>
               <div class="greybox"></div>
          </div>

            <div class="sec2">
               <div class="rounded-rectangle">🔍Search by national ID</div>
               <div class="nc">⬇</div>
            </div>
         </div>

          <div class="abovetable2">
             <div class="greybox"></div>
             <div class="greybox" id="long" ></div>
             

          </div>
         
         <div class="abovetable3">
            <div class="greybox"></div>
             <div class="greybox"></div>
             <div class="greybox"></div>
             <div class="greybox"></div>
             <div class="greybox"></div>
             <div class="greybox"></div>
            
          </div>
         
         <table>

             <thead>
                <tr>
                   
                    <th> <div class="greybox"></div></th>
                   <th> <div class="greybox"></div></th>
                    <th> <div class="greybox"></div></th>

                    <th> <div class="greybox"></div></th>
                    <th> <div class="greybox"></div></th>
                    <th> <div class="greybox"></div></th>
                   
                </tr>
             </thead>
             <tbody>
                <tr>
                   
                          <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                     <td><div class="greybox"></div></td>

                </tr>
                <tr>
                <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                     <td><div class="greybox"></div></td>
                </tr>
             
                <tr>
                   <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                     <td><div class="greybox"></div></td>
                </tr>
                <tr>
                    <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                        <td><div class="greybox"></div></td>
                     <td><div class="greybox"></div></td>
                </tr>
             
             </tbody>
          </table>


         <div class="undertable">
              <div class="greybox" id="se1"></div>
            <div class="greybox" id="se2" ></div>
            <div class="greybox" id="se3"></div>
            <div class="greybox" id="se3"></div>
         </div>
         <div class="undertable2">
              <div class="greybox" ></div>
             <div class="greybox"  ></div>

         
         </div>
         
         
      </div>

   </div>

</div>


`;


class CustomElement extends HTMLElement{
constructor(){
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = customvar;
    
  }
 

}
customElements.define('custom-element', CustomElement);


