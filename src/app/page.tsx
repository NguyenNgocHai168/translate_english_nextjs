import Navbar from "@/component/Navbar";

export default function Home() {
  return (
     <div>
        <Navbar />
          <div className="m-4" style={{marginTop: "4.5rem!important"}}>
            <div className="alert alert-success text-center text-uppercase">
                <span>Website học từ vựng english</span>
            </div>
          </div>
     </div>
  )
}
