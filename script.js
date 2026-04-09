alert('Hello, Parcel');

const stepHover_1 = document.getElementById('step_1');
const stepHover_2 = document.getElementById('step_2');
const circle_1 = document.getElementById('circle_1');
const circle_2 = document.getElementById('circle_2');

// Эффект для шага 1
stepHover_1.addEventListener('mouseenter', () => {
    circle_1.innerHTML = '<span class="text-white font-bold text-sm">1</span>';
    circle_1.classList.add('bg-[#415BE7]', 'border-none', 'text-sm', 'font-helv');
    circle_1.classList.remove('bg-[#ffffff]', 'border', 'border-solid', 'border-[#DBDDE3]');
});

stepHover_1.addEventListener('mouseleave', () => {
    circle_1.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#415BE7" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`;
    circle_1.classList.remove('bg-[#415BE7]', 'border-none');
    circle_1.classList.add('bg-[#ffffff]', 'border', 'border-solid', 'border-[#DBDDE3]');
});

stepHover_2.addEventListener('mouseenter', () => {
    circle_2.innerHTML = '<span class="text-white font-bold text-sm">2</span>';
    circle_2.classList.add('bg-[#415BE7]', 'border-none', 'text-sm', 'font-helv');
    circle_2.classList.remove('bg-[#ffffff]', 'border', 'border-solid', 'border-[#DBDDE3]');
});

stepHover_2.addEventListener('mouseleave', () => {
    circle_2.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#415BE7" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`;
    circle_2.classList.remove('bg-[#415BE7]', 'border-none');
    circle_2.classList.add('bg-[#ffffff]', 'border', 'border-solid', 'border-[#DBDDE3]');
});