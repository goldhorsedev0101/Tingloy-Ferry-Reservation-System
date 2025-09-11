import{r as n,j as e,L as D,a as f}from"./app-A77s5gen.js";import{B as h}from"./button-DPe8ay7E.js";import{D as S,g as C,a as R,f as A,b as P,d as T}from"./dialog-6pBwZ6i_.js";import{A as N}from"./app-layout-DqZFQMOE.js";import{t as o}from"./index-lO_Qg33a.js";import{Html5QrScanner as B}from"./Html5QrScanner-A0TqPlui.js";import"./index-CvvFm-kH.js";import"./utils-jAU0Cazi.js";import"./index-p_b0Q2qY.js";import"./index-BnJiHe9u.js";import"./index-XEsQGXf7.js";import"./index-CUIeGGuI.js";import"./index-2nhir58G.js";import"./x-dumTal7h.js";import"./createLucideIcon-BadHzCM5.js";import"./index-Bh-_baMW.js";import"./index-C7z7hR1g.js";import"./app-logo-icon-DJVYr9-C.js";import"./logo-BzCao4e8.js";import"./ticket-DiMPpt5h.js";import"./scan-line-DDMxk9Bj.js";import"./users-CIU_UTjG.js";import"./calendar-DMpP-Hop.js";import"./chevron-right-Dx8cNiLO.js";const I=[{title:"Scan QR code",href:"staff/scan_qr"}],nt=()=>{const[x,m]=n.useState(!1),i=n.useRef(!1),[y,d]=n.useState(!1),[p,l]=n.useState(null),[$,c]=n.useState(!1),k=async a=>{if(x||i.current)return;const b=`${window.location.protocol}//${window.location.host}`;m(!0),i.current=!0;try{const r=await f.post(route("qr.validation"),{data:a});o.success(r.data.message),d(!1),l(null);const t=r.data.booking,w=s=>new Date(s).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0,timeZone:"Asia/Manila"}),j=t.passengers.map((s,g)=>`
            <tr>
                <td>${g+1}</td>
                <td>${s.full_name}</td>
                <td>${s.age}</td>
                <td>${s.contact_number}</td>
                <td>${s.address}</td>
                <td>₱${s.passenger_fare}</td>
                <td>${s.passenger_fare_type}</td>
                <td>${s.residency_status}</td>
                <td>${s.is_main_passenger?"Yes":"No"}</td>
                <td>${s.id_file?`<img src="${b}/storage/${s.id_file}" alt="ID" style="max-width:100px;">`:""}</td>
            </tr>
        `).join(""),u=window.open("","_blank");u&&u.document.write(`
                <html>
                <head>
                    <title>Booking #${t.ticket_code}</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 20px; }
                        h2 { margin-top: 30px; }
                        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                        th, td { border: 1px solid #ccc; padding: 8px; text-align: left; font-size: 14px; }
                        th { background: #f2f2f2; }
                        img { max-width: 120px; margin-top: 5px; }
                         button { height: 50px; width: 200px; background: #222; color: white; unset: all; }
                        @media print { button { display: none; }}
                        header { display: flex !important; align-items: center !important; justify-content: between !important; width: 100vw !important; }
                    </style>
                </head>
                <body>
                    <header>
                        <h1>Booking Information</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onclick="window.print()">Print Document</button>
                    </header>

                    <h2>Booking Details</h2>
                    <table>
                        <tr><th>Ticket Code</th><td>${t.ticket_code}</td></tr>
                        <tr><th>Payment Method</th><td>${t.payment_method}</td></tr>
                        <tr><th>Total Fee</th><td>₱${t.total_fee}</td></tr>
                        <tr><th>Status</th><td>${t.status}</td></tr>
                        <tr><th>Receipt Image</th><td><img src="${b}/storage/${t.receipt_image}" alt="Receipt"></td></tr>
                    </table>

                    <h2>Route Details</h2>
                    <table>
                        <tr><th>Route Name</th><td>${t.route.name}</td></tr>
                        <tr><th>Route Code</th><td>${t.route.route_code}</td></tr>
                        <tr><th>From</th><td>${t.route.start_location}</td></tr>
                        <tr><th>To</th><td>${t.route.end_location}</td></tr>
                        <tr><th>Date & Time</th><td>${w(t.route.date_and_time)}</td></tr>
                        <tr><th>Capacity</th><td>${t.route.capacity}</td></tr>
                    </table>

                    <h2>User Details</h2>
                    <table>
                        <tr><th>Name</th><td>${t.user.name}</td></tr>
                        <tr><th>Email</th><td>${t.user.email}</td></tr>
                        <tr><th>Address</th><td>${t.user.address}</td></tr>
                        <tr><th>Birthdate</th><td>${t.user.birthdate}</td></tr>
                        <tr><th>Role</th><td>${t.user.role}</td></tr>
                    </table>

                    <h2>Passengers</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Age</th>
                                <th>Contact Number</th>
                                <th>Address</th>
                                <th>Fare</th>
                                <th>Fare Type</th>
                                <th>Residency</th>
                                <th>Main Passenger</th>
                                <th>ID Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${j}
                        </tbody>
                    </table>
                </body>
                </html>
            `),setTimeout(()=>{i.current=!1},1e3)}catch(r){console.error("QR submission failed:",r),r.response&&r.response.status===422?(o.error(r.response.data.message),r.response.data.can_mark_as_paid&&(d(!0),l(r.response.data.booking_id))):o.error("An error occurred while processing the QR code. Please try again."),i.current=!1}finally{m(!1)}},_=async()=>{if(p)try{const a=await f.post(route("booking.paid",p));o.success(a.data.message),d(!1),l(null),c(!1)}catch(a){console.log(a),o.error("Failed to update payment status.")}};return e.jsxs(N,{breadcrumbs:I,children:[e.jsx(D,{title:"Scan QR Code"}),e.jsxs("div",{className:"mx-auto max-w-md py-5",children:[y&&p&&e.jsxs("div",{className:"bg-rose-100 p-4 text-rose-500 rounded-t-sm",children:[e.jsx("p",{children:"This booking can be marked as paid."}),e.jsx("div",{className:"mt-2",children:e.jsxs(S,{open:$,onOpenChange:c,children:[e.jsx(C,{asChild:!0,children:e.jsx(h,{children:"Mark as Paid"})}),e.jsxs(R,{children:[e.jsx(A,{children:e.jsx(P,{children:"Confirm Payment"})}),e.jsx("p",{children:"Are you sure you want to mark this booking as paid?"}),e.jsxs(T,{className:"mt-4",children:[e.jsx(h,{variant:"outline",onClick:()=>c(!1),children:"Cancel"}),e.jsx(h,{onClick:_,children:"Confirm"})]})]})]})})]}),e.jsx(B,{onScanSuccess:k})]})]})};export{nt as default};
