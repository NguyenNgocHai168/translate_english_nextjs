"use client"
import Navbar from "@/component/Navbar";
import './style.css'

import datas from './data.json'
import { useEffect, useState } from "react";
let options = [
    {
        id: 1,
        name: "N5"
    },
    {
        id: 2,
        name: "N4"
    },
    {
        id: 3,
        name: "N3"
    },
]

export default function VocabularyList() {
    let [number, setNumber] = useState<any>(1)
    let [vocalList, setVocalList] = useState<[]>([])

    useEffect(() => {
        let result: any = datas.filter((item) => item.WorkLevel.ID == number)
        setVocalList(result)
    }, [number])

    console.log(vocalList);
    

    return (
        <div className="position-relative">
            <Navbar />
            <div className="card rounded-0 m-4" style={{marginTop: "4.5rem!important"}}>
                <h5 className="card-header text-uppercase">Danh sách từ</h5>
                <div className="card-body">
                    <div className="input-group mb-3">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => setNumber(e.target.value)}>
                        {options.map((item, index) => { 
                            return <option value={item.id} key={index}>{item.name}</option>    
                        })}
                    </select>
                    </div>
                    <div className="alert alert-primary">
                        <table className="table table-dark table-hover text-center">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">English</th>
                                <th scope="col">Vietnamese</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vocalList.map((item:any, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{item.WorkLevel.ID}</th>
                                            <td>{item.Kana}</td>
                                            <td>{item.Imi}</td>
                                        </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom" style={{height: "45%"}}>
                <div className="dropdown position-absolute bottom-0 end-0 m-4">
                    <button className="btn btn-secondary p-3 rounded-circle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul className="dropdown-menu" 
                        aria-labelledby="dropdownMenuButton1"
                        style={{minWidth: "2rem", backgroundColor: "rgb(0 0 0 / 0%)", border: "none", right: "1px", top:"-65px"}}
                    >
                        <li className="item-1 position-relative mb-2">
                            <span 
                                className="position-fixed text-success d-none"
                                style={{width: "120px", right: "25px", bottom: "90px"}}
                            >
                                Bài kiểm tra
                            </span>
                            <a href="http://localhost:3000/translate/vocalbulary_test">
                                <button className="border-0 bg-success p-3 rounded-circle">
                                    <i className="fas fa-pen"></i>
                                </button>
                            </a>
                        </li>
                        <li className="item-2 position-relative">
                            <span 
                                className="position-fixed text-danger d-none"
                                style={{width: "120px", right: "25px", bottom: "25px"}}
                            >
                                Tra cứu từ
                            </span>
                            <a href="http://localhost:3000/translate/vocalbulary_flashcard">
                                <button className="border-0 bg-danger p-3 rounded-circle">
                                    <i className="fas fa-book"></i>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}