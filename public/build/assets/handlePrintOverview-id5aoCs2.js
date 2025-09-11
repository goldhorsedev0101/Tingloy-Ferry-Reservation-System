import{f as o}from"./format-BlyJTOGp.js";const l=e=>{var r,p;const d=window.open("","_blank","width=1000,height=800");if(!d||!e)return;const a=`${window.location.protocol}//${window.location.host}`,h=o(new Date,"MMM dd, yyyy hh:mm a"),s=Array.isArray(e.passengers)?e.passengers.map((t,i)=>`
        <tr>
            <td>${i+1}</td>
            <td>${t.full_name}</td>
            <td>${t.age}</td>
            <td>${t.contact_number}</td>
            <td>${t.address}</td>
            <td>${t.passenger_fare_type} – ₱${t.passenger_fare}</td>
            <td>${t.residency_status}</td>
            <td>${t.is_main_passenger?"Yes":"No"}</td>
            <td>${t.id_file?`<img src="${a}/storage/${t.id_file}" width="80" />`:"N/A"}</td>
        </tr>
    `).join(""):"",n=Array.isArray(e.bookings)?e.bookings.map((t,i)=>`
        <tr>
            <td>${i+1}</td>
            <td>${t.ticket_code}</td>
            <td>${t.payment_method}</td>
            <td>₱${t.total_fee}</td>
            <td>${t.is_paid?"Paid":"Unpaid"}</td>
            <td>${t.number_of_passengers}</td>
            <td>${t.status}</td>
            <td>${t.receipt_image?`<img src="${a}/storage/${t.receipt_image}" width="100" />`:"N/A"}</td>
            <td>${t.qr_code?`<img src="https://quickchart.io/qr?text=${t.qr_code}&size=200" width="100" />`:"N/A"}</td>
        </tr>
    `).join(""):"",c=`
        <html>
        <head>
            <title>Trip Overview</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; color: #333; }
                h1, h2 { margin-bottom: 0.5rem; }
                h1 { font-size: 24px; border-bottom: 3px solid #222; padding-bottom: 6px; }
                h2 { margin-top: 2rem; font-size: 18px; color: #222; border-bottom: 1px solid #aaa; padding-bottom: 4px; }
                table { width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 14px; }
                th, td { border: 1px solid #ccc; padding: 8px; text-align: left; vertical-align: middle; }
                th { background-color: #f2f2f2; }
                img { border: 1px solid #aaa; border-radius: 4px; padding: 2px; }
                .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
                .company-info { text-align: left; }
                .company-info h1 { margin: 0; font-size: 20px; }
                .company-info p { margin: 2px 0; font-size: 12px; color: #555; }
                .print-date { font-size: 12px; color: #666; text-align: right; }
                .summary-box { display: flex; gap: 40px; margin-top: 10px; }
                .summary-box div { flex: 1; }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="company-info">
                    <h1>🚢 Tingloy Ferry</h1>
                    <p>Official Trip Manifest</p>
                    <p>Generated: ${h}</p>
                </div>
                <div class="print-date">
                    <p><strong>Route Code:</strong> ${e.route_code}</p>
                    <p><strong>Status:</strong> ${e.status.toUpperCase()}</p>
                </div>
            </div>

            <div class="info">
                <p><strong>Route:</strong> ${e.name}</p>
                <div class="summary-box">
                    <div>
                        <p><strong>From:</strong> ${e.start_location}</p>
                        <p><strong>To:</strong> ${e.end_location}</p>
                    </div>
                    <div>
                        <p><strong>Date:</strong> ${e.date_and_time?o(new Date(e.date_and_time),"MMM dd, yyyy"):"N/A"}</p>
                        <p><strong>Time:</strong> ${e.date_and_time?o(new Date(e.date_and_time),"hh:mm a"):"N/A"}</p>
                    </div>
                    <div>
                        <p><strong>Capacity:</strong> ${e.capacity}</p>
                        <p><strong>Seats Occupied:</strong> ${e.seats_occupied}</p>
                        <p><strong>Remaining:</strong> ${e.capacity-e.seats_occupied}</p>
                    </div>
                </div>
            </div>

            <h2>Passenger List (${((r=e.passengers)==null?void 0:r.length)||0})</h2>
            ${s?`
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Age</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Fare</th>
                            <th>Residency</th>
                            <th>Main Passenger</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${s}
                    </tbody>
                </table>
            `:"<p>No passengers found.</p>"}

            <h2>Bookings (${((p=e.bookings)==null?void 0:p.length)||0})</h2>
            ${n?`
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ticket Code</th>
                            <th>Payment</th>
                            <th>Total Fee</th>
                            <th>Paid</th>
                            <th>Passengers</th>
                            <th>Status</th>
                            <th>Receipt</th>
                            <th>QR</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${n}
                    </tbody>
                </table>
            `:"<p>No bookings found.</p>"}

            <script>
                window.onload = () => {
                    setTimeout(() => {
                        window.print();
                        window.close();
                    }, 600);
                };
            <\/script>
        </body>
        </html>
    `;d.document.write(c),d.document.close()};export{l as handlePrintOverview};
