// Format currency
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', CONFIG.CURRENCY_FORMAT).format(amount);
};

// Show message
function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, CONFIG.MESSAGE_DURATION);
}

// Update dashboard
function updateDashboard(data) {
    // Update employee sales
    const employeeSalesDiv = document.getElementById('employeeSales');
    employeeSalesDiv.innerHTML = '';
    Object.entries(data.dailyTotals).forEach(([employee, amount]) => {
        const div = document.createElement('div');
        div.className = 'stat-item';
        div.innerHTML = `
            <strong>${employee}</strong>
            <span>${formatCurrency(amount)}</span>
        `;
        employeeSalesDiv.appendChild(div);
    });

    // Update summary
    document.getElementById('totalSales').textContent = formatCurrency(data.totalSales);
    document.getElementById('cashTotal').textContent = formatCurrency(data.totalCash);
    document.getElementById('cardTotal').textContent = formatCurrency(data.totalCard);
}

// Fetch daily data
async function fetchDailyData() {
    try {
        const response = await axios.get(CONFIG.SCRIPT_URL);
        updateDashboard(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        showMessage('Error fetching data', 'error');
    }
}

// Handle form submission
document.getElementById('salesForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        employee: document.getElementById('employee').value,
        amount: document.getElementById('amount').value,
        paymentType: document.getElementById('paymentType').value,
        date: new Date().toISOString()
    };

    try {
        const response = await axios.post(CONFIG.SCRIPT_URL, formData);
        if (response.data.status === 'success') {
            showMessage('Sale recorded successfully', 'success');
            e.target.reset();
            fetchDailyData();
        } else {
            showMessage(response.data.message || 'Error recording sale', 'error');
        }
    } catch (error) {
        console.error('Error submitting sale:', error);
        showMessage('Error recording sale', 'error');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    fetchDailyData();
    setInterval(fetchDailyData, CONFIG.REFRESH_INTER
