# Barber Shop Sales Tracker

A web-based sales tracking system for barber shops. Tracks daily sales, payment methods, and employee performance.

## Features
- Real-time sales entry
- Employee tracking
- Payment type tracking (Cash/Card)
- Daily summaries
- Automatic updates
- Mobile responsive

## Setup
1. Open the website
2. Enter sales information
3. View real-time updates
4. Monitor daily performance

## Access
The tracker is accessible at: https://[your-username].github.io/barber-sales-tracker/


## A. Frontend (index.html):
1. User Interface Elements:
   - Sales Entry Form
   - Real-time Clock/Date Display
   - Employee Selection (Default: Yassine)
   - Amount Input
   - Payment Type Selection
   - Daily Summary Dashboard
   - Employee Sales Dashboard

2. Key Features:
   - Real-time updates
   - Mobile responsive design
   - Automatic refresh
   - Error handling
   - Success notifications
   - Clean, professional layout

3. File Structure:
   index.html (contains):
   - HTML structure
   - CSS styling
   - JavaScript functionality
   - API integration

4. Technologies Used:
   - HTML5
   - CSS3
   - JavaScript
   - Axios for API calls
  
  ## B. Backend (Google Apps Script):
  1. Google Sheets Structure:
   
   Sheet 1: "Sales"
   - Columns: Timestamp, Date, Employee, Amount, Payment Type, Entry Time, Status
   - Purpose: Raw data storage

   Sheet 2: "Daily Summary"
   - Employee Sales Section
   - Payment Summary Section
   - Auto-updating totals

2. Script Functions:
   - initializeSpreadsheet(): Setup sheets and formatting
   - calculateDailySummary(): Update daily totals
   - doPost(): Handle new sales
   - doGet(): Retrieve current data
   - formatSummarySheet(): Handle formatting
   - setupSummarySheet(): Initialize summary layout

3. Features:
   - Automatic calculations
   - Real-time updates
   - Data validation
   - Error handling
   - CORS support
  
   ## Installation/Setup Steps:

1. Google Sheet Setup:
```
a. Create new Google Sheet
b. Go to Extensions > Apps Script
c. Copy and paste Google Apps Script code
d. Save and deploy as web app
e. Set access to "Anyone"
f. Copy the deployment URL
```

2. Frontend Setup:
```
a. Create index.html file
b. Copy the complete HTML code
c. Replace SCRIPT_URL with your Google Apps Script URL
d. Host the file (Options):
   - GitHub Pages
   - Local server
   - Web hosting
```

3. Testing:
```
a. Open the hosted website
b. Submit test sale
c. Check Google Sheet for data
d. Verify summary updates

## Code Specifications:
1. Frontend Specs:
```
- Responsive breakpoint: 768px
- Default employee: Yassine
- Auto refresh: Every 5 minutes
- Time update: Every second
- Date update: Every minute
- Currency format: USD
```

2. Backend Specs:
```
- Sheet update: Real-time
- Date format: Locale string
- Number format: 2 decimal places
- Status options: Active
- Required fields: Employee, Amount, Payment Type
```

3. Data Structure:
```
Sales Entry:
{
    employee: string,
    amount: number,
    paymentType: string,
    date: ISO string
}

Summary Data:
{
    dailyTotals: {
        [employee]: number
    },
    totalSales: number,
    totalCash: number,
    totalCard: number
}
```
