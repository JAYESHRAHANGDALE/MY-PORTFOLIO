const arr1 = [
    {'Frontent:':'HTML,CSS,JS' },
    {'Backent:':'.NET,C#,ASP.NET' },

    // 'Frontend:HTML,CSS,JS',
    // 'Backend:C#,.NET,ASP.NET'
];
const arr2 = [`Project:HTML,CSS,JS `,'Backend:C#,.NET,ASP.NET'];
const arr3 = ['Address:HTML,CSS,JS','Backend:C#,.NET,ASP.NET'];

function func1(){
    fun4();
    document.querySelector('.skihead').style.borderBottom = "2px solid red";
    document.querySelector('.prohead').style.border="none";
    document.querySelector('.addhead').style.border= "none";
    
    let x=document.getElementById('ski1');
    x.innerHTML=`<h5>Frontend:</h5><p>Html,css,js</p><br>
    <h5>Bachendtend:</h5><p>NET,C#,ASP.NET</p><br>
    <h5>Version Control:</h5><p>Git,Github</p>`
}
function func2(){
    fun4();
    document.querySelector('.skihead').style.border="none";
    document.querySelector('.prohead').style.borderBottom = "2px solid red";
    document.querySelector('.addhead').style.border= "none";
    let x=document.getElementById('ski2');
    x.innerHTML=`<h5>Netfix:</h5><p>Using html,css,js</p><br>
    <h5>Google Clone:</h5><p>using .NET,C#,ASP.NET</p><br>
    <h5>Youtube Clone:</h5><p>using Java,Waba,Chaba</p>`
}
function func3(){
    fun4()
    document.querySelector('.skihead').style.border="none";
    document.querySelector('.prohead').style.border="none";
    document.querySelector('.addhead').style.borderBottom = "2px solid red";
    let x=document.getElementById('ski3');
    x.innerHTML=`<h5>Hyderabad:</h5><p>Amulya Hostel</p><br>
    <h5>Nagpur:</h5><p>Pura Nagpur hi apna hai</p><br>
    <h5>India:</h5><p>Jaha bula lo</p>`
}
function fun4(){
    document.getElementById('ski3').innerHTML='';
    document.getElementById('ski2').innerHTML='';
    document.getElementById('ski1').innerHTML='';

}
