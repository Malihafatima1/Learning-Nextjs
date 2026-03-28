import Link from "next/link"

export default function DashboardLayout({ children }){
    return(
     <div style={{display:'flex'}}>
             <aside style={{ width:"200px"}}>
               <h3>Dashboard</h3>
               <ul>
               <li><Link href="/dashboard">Home</Link></li>
               <li><Link href="/dashboard/analytics">Analytics</Link></li>
               <li><Link href="/dashboard/settings">Settings</Link></li>
               </ul>
             </aside>

             <main style={{marginleft:"20px"}}>
             {children}
             </main>
     </div>
    )
}