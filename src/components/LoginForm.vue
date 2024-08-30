<template>
    <img src="@/assets/login.png" width="100px" height="100px" alt="image error">
    <form class="loginform">
        <input type="email" placeholder="enter your email"><br>
        <input type="password" placeholder="enter password">
    </form>

    <button>login</button><br>
    <div class="passwordforgot">
        <h3>forgot your password</h3>
    <RouterLink to="ForgotPassword">Click here</RouterLink>

    
    </div>
    <h3>dont have an account</h3>
    <RouterLink to="SignupForm">Sign Up here</RouterLink>
</template>
 
