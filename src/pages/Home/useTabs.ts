import { ChannelType, fetchChannelAPI } from "@/apis/list"
import { useEffect, useState } from "react"

export const useTabs = () => {
    const [channels, setChannels] = useState<ChannelType[]>([])
    useEffect(() => {
        const getChannels = async() => {
            try{const res = await fetchChannelAPI()
            setChannels(res.data.data.channels)
            } catch (error) {
                throw new Error('fetch channel error')
            }
        }

        getChannels();
    }, [])

    return {
        channels
    }
}