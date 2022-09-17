function navbars(){
    return `<div id="navbar">
    <a href="index.html">Home</a>
    <a href="cart.html">Cart</a>
    <a href="chec.html">Checkout</a>
    <a href="signup.html">SignUP</a>
    <a href="login.html">login</a>
   </div>`
}
function form(){
    return `<div id="form">
    <input type="text" id="name" placeholder="Enter name"><br>
    <input type="text" id="email" placeholder="Enter Email"><br>
    <input type="text" id="password" placeholder="Enter Password"><br>
    <input type="text" id="username" placeholder="Enter Username"><br>
    <input type="text" id="mobile" placeholder="Enter Mob No"><br>
    <input type="text" id="desc" placeholder="Enter Description"><br>
    <button id="reg">Register</button>

   </div>`
}
function login(){
    return `<div id="log">
    <input type="text" id="uname" placeholder="Enter Username"><br>
    <input type="text" id="pass" placeholder="Enter password"><br>
    <button id="logx">LogIn</button>
   </div>`
}

export {navbars,form,login}