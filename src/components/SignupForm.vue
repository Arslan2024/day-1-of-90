<template>

    <img src="@/assets/login.png" width="200" height="120">
    <h1>Sign Up</h1>
    <div class loginform>
        <form action="post">
            <input type="text" placeholder="name"> <br>
            <input type="email" placeholder="enter email"><br>
            <input type="password" placeholder="enter a strong password"><br>
            <input type="password" placeholder="enter password again"><br>
        </form>
        <router-link to="/LoginForm">Sign up</router-link>

    </div>
    <h3>or</h3>
    <RouterLink to="LoginForm">Already have an account?</RouterLink>
</template>



<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 10px;
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;

    img {
        padding-right: 08%;
    }

    h1 {
        margin-top: 2%;
    }

    input {
        padding-bottom: 8px;
    }

    form {
        text-decoration: solid;
        text-align: center;
        line-height: 50px;
        border: 2px rgb(142, 221, 243);
        padding: 10px;
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 280px;
        background-color: rgb(166, 232, 242);
        border-radius: 10%;
        align-items: center;
        margin-left: 500px;




    }

    button {
        border: 2px solid;
        border-radius: 15%;
        margin-top: 20px;
    }

}
</style>