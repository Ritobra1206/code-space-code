import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header } from "@/components/all-cards/Header"
import { Sidebar } from "@/components/all-cards/Sidebar"

function HomePage(){
    return(
        <>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Sidebar />
          <div className="flex flex-col">
            <Header />
            
              <main className="flex flex-1 flex-col gap-4 lg:gap-6">
              <div className="members-modal">
                <Outlet />
                </div>
              </main>
            </div>
          </div>
        
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    )
}
export default HomePage;