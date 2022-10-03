<template>
    <nav :class="$style.NavBar">
        <RouterLink to="/">
            <span>NF</span>
        </RouterLink>
        <RouterLink to="/About/">
            About
        </RouterLink>
        <RouterLink to="/Donate/">
            Donate
        </RouterLink>
        <RouterLink to="/DMCA/">
            DMCA
        </RouterLink>
    </nav>
</template>

<style scoped module lang="scss">
.NavBar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4.5rem;
    padding-inline: 0.6rem;
    // padding: 2em;
    background-color: #111111;
    color: #fff;
    list-style: none;

    :nth-child(1) {
        margin-right: auto;
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;

        span {
            margin: 0;
            color: transparent;
            -webkit-text-fill-color: transparent;
        }

        span:before {
            content: "NF";
            position: absolute;
            top: 0;
            right: 0;
            background-clip: text;
            background-image: linear-gradient(to right, #818181, #dcdcdc);
        }
    }

    a {
        display: flex;
        justify-content: center;
        width: 7%;
        font-size: 1.5rem;
        font-family: 'Rubik', sans-serif;
        color: inherit;
        text-decoration: none;
    }
}
</style>