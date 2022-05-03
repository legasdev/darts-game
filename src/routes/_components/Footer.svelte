<script>
    const nowYear = new Date().getFullYear();
</script>


<footer class="footer">
    <span class="footer__text">Артем Степанов</span>
    <span class="footer__text">{nowYear}</span>
</footer>


<style>
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer__text {
        font-style: normal;
        font-weight: 300;
        font-size: 0.875rem;
        line-height: 1.063em;
        text-align: center;
        color: var(--color-grey-dark);
    }
</style>