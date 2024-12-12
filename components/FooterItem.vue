<template>
    <footer class="footer">
        <div class="footer__container">
            <!-- <NuxtLink href="/">
                <img class="footer__logo" src="/public/logo.png" alt="logo avb-stroy" />
            </NuxtLink>

            <section class="footer__phone">
                <NuxtLink class="footer__phone--number" href="tel:939993">93-99-93</NuxtLink>
            </section> -->

            <p class="footer__year">&copy; 2024 AVB-Stroy. Все права защищены.</p>
        </div>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
    position: relative;
    background-color: rgba(47 53 59 / 65%);
    backdrop-filter: blur(10px);
    color: white;
    padding: 10px;
    text-align: center;
    z-index: 10;

    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    &__logo {
        width: 150px;
        height: auto;
    }

    &__phone {
        &--number {
            text-decoration: none;
            color: #80c31e;
            font-size: 1.2rem;
            transition: all ease 0.3s;

            &:hover {
                color: #679c18;
                transform: translateY(-2px);
                scale: 1.1;
                cursor: pointer;
            }
        }
    }
}

@media (max-width: 768px) {
    .footer__container {
        gap: 5px;
    }

    .footer__year {
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .footer__year {
        font-size: 0.9rem;
    }
}
</style>
