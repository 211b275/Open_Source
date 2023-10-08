document.addEventListener('DOMContentLoaded', function () 
{
    const showMoreBtn = document.getElementById('show-more-btn');
    const additionalInfo = document.getElementById('additional-info');

    showMoreBtn.addEventListener('click', function () 
    {
        additionalInfo.classList.toggle('hidden');
        this.textContent = additionalInfo.classList.contains('hidden') ? 'Show More' : 'Show Less';
    });
});
