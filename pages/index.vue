<template>
    <main class="page">
        <section class="page__content">
            <h1 class="page__content--slogan">Чувство прекрасного - бесценно</h1>
            <p class="page__content--description">
                Мы строим прекрасные дома, а нам создают новый, прекрасный сайт. Ещё немного и
                Вы всё увидите.
            </p>
        </section>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'main-layout',
})
</script>

<style scoped lang="scss">
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
        background: #2f353b;
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
        margin-top: 25vh;
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
