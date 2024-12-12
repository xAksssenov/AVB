<template>
    <header class="header">
        <div class="header__container">
            <NuxtLink href="/">
                <img class="header__logo" src="/public/logo.png" alt="logo avb-stroy" />
            </NuxtLink>

            <!-- <section class="header__nav">
                <NuxtLink class="header__nav--text">О нас</NuxtLink>
                <NuxtLink class="header__nav--text">Заказать</NuxtLink>
                <NuxtLink class="header__nav--text">Отзывы </NuxtLink>
            </section> -->

            <section class="header__phone">
                <NuxtLink class="header__phone--number" href="tel:939993">93-99-93</NuxtLink>
            </section>
        </div>
    </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
    width: 100vw;
    height: 9vh;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: rgba(47 53 59 / 80%);
    backdrop-filter: blur(10px);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    &__container {
        margin: 0 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__logo {
        width: 160px;
        height: 80px;
        transition: all ease 0.3s;

        &:hover {
            scale: 1.05;
            cursor: pointer;
        }
    }

    &__nav {
        display: flex;
        gap: 90px;

        &--text {
            font-size: 18px;
            color: #80c31e;
            transition: all ease 0.3s;

            &:hover {
                color: #679c18;
                transform: translateY(-2px);
                scale: 1.1;
                cursor: pointer;
            }
        }
    }

    &__phone {
        display: flex;

        &--number {
            text-decoration: none;
            color: #80c31e;
            transition: all ease 0.3s;

            &:hover {
                color: #70aa19;
                transform: translateY(-2px);
                scale: 1.1;
                cursor: pointer;
            }
        }
    }
}

@media (max-width: 768px) {
    .header__container {
        margin: 0 20px;
        align-items: center;
    }

    .header__logo {
        width: 120px;
        height: 60px;
    }
}

@media (max-width: 480px) {
    .header__logo {
        width: 100px;
        height: 50px;
    }

    .header__phone--number {
        font-size: 1rem;
    }
}
</style>
