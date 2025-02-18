import { DetailRes, fetchDetailAPI } from "@/apis/detail";
import { NavBar } from "antd-mobile";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

const Detail = () => {
    const [detail, setDetail] = useState<DetailRes | null>(null);
    const [params] = useSearchParams();
    const id = params.get('id') 
    useEffect(() => {
        const fetchDetail = async() => {
            try{
                const res = await fetchDetailAPI(id!)
                 setDetail( res.data.data);
            } catch (error) {
                throw new Error('fetch Detail error')
            }
            
        } 
        fetchDetail()
    }, [])
    if(!detail) return (
        <div>this is loading</div>
    ) 
    return (
        <>
        <NavBar>{detail.title}</NavBar>
        <div dangerouslySetInnerHTML={{__html:detail.content}}></div>
        </>
    )
  }
  
  export default Detail