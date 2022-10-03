<template>
    <div :class="$style.Search">
        <header :class="$style.Header">
            NeoFlicks
        </header>
        <div :class="$style.SearchBar">
            <div :class="$style.SearchIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
            <div
                style="background-color: #ffffffcc;width: 3px;height: 120%;margin-left: 0.1em;margin-right: 0.3em;border-radius: 0.1em;" />
            <input type="text" placeholder="Enter a Search Term" />
        </div>
    </div>
</template>

<style scoped module lang="scss">
.Search {
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: center;
}

.Header {
    font-family: 'Poppins', sans-serif;
    font-size: 5rem;
    color: transparent;
}

.Header:after {
    content: "NeoFlicks";
    user-select: text;
    background-clip: text;
    background-image: linear-gradient(to right, #818181, #d4d4d4);
    position: absolute;
    top: 0;
    left: 0;
}


.SearchBar {
    display: flex;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 10rem;
    height: 5rem;
    box-sizing: border-box;
    align-items: center;
    $border: 4px;
    padding: 1rem;
    font-size: 2rem;
    border: solid $border transparent;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.02);
    background: #181818;
    background-clip: padding-box;
    /* !importanté */


    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -$border;
        /* !importanté */
        border-radius: inherit;
        /* !importanté */
        background: linear-gradient(to right, #818181, #d4d4d4);
    }

    .SearchIcon {
        height: 100%;
        aspect-ratio: 1/1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.2em;

        svg {
            width: 100%;
        }
    }

    input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        outline: none;
        border: none;
        font-size: 90%;
        color: inherit;
        font-family: 'DM Sans', sans-serif;
    }
}
</style>