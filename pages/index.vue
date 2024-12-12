<template>
    <main class="page">
        <section class="page__content">
            <h1 class="page__content--slogan">Чувство прекрасного - бесценно</h1>
            <p class="page__content--description">
                Мы строим прекрасные дома, а нам создают новый, прекрасный сайт. Ещё
                немного и Вы всё увидите.
            </p>
        </section>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'main-layout',
})
</script>

<style lang="scss">
body {
    font-family: sans-serif;
    margin: 0;
    overflow-x: hidden;
    background: url('/public/background.jpg') no-repeat center center fixed;
    background-size: cover;

    &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0 0 0 / 55%);
        z-index: 1;
    }
}

.page {
    position: relative;
    color: white;
    text-align: center;
    min-height: 91vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__content {
        position: relative;
        z-index: 2;
        margin-top: 30vh;
        padding: 0 20px;

        &--slogan {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 20px;
            text-shadow: 2px 2px 10px rgba(0 0 0 / 80%);
        }

        &--description {
            font-size: 1.5rem;
            line-height: 1.8;
            max-width: 800px;
            margin: 0 auto;
            text-shadow: 1px 1px 5px rgba(0 0 0 / 80%);
        }
    }

    &__info {
        z-index: 10;
        background: #2F353B;
        color: white;
        padding: 40px 20px;
        text-align: center;

        &--title {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 20px;
        }

        &--description {
            font-size: 1.2rem;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
        }
    }
}

@media (max-width: 1200px) {
    .page__content--slogan {
        font-size: 2.5rem;
    }

    .page__content--description {
        font-size: 1.3rem;
    }
}

@media (max-width: 768px) {
    .page__content--slogan {
        font-size: 2rem;
    }

    .page__content--description {
        font-size: 1.1rem;
    }

    .page__content {
        margin-top: 20vh;
    }
}

@media (max-width: 480px) {
    .page__content--slogan {
        font-size: 1.5rem;
    }

    .page__content--description {
        font-size: 1rem;
    }

    .page {
        padding: 10px;
    }
}
</style>
