import { CheckCircleFilled, ClockCircleFilled } from "@ant-design/icons";
import { Affix, Button, Select, Table } from "antd";
import Title from "antd/es/typography/Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Example = () => {
    const router = useRouter()
    const [time,setTime] = useState([15, 0])

    useEffect(() => {
        const countdown = setInterval(() => {
            setTime(([minutes, seconds]) => {
                if (seconds > 0) {
                    return [minutes, seconds - 1];
                }
                if (minutes > 0) {
                    return [minutes - 1, 59];
                }
                clearInterval(countdown);
                // Perform action when countdown reaches zero
                router.push('/some-other-page');
                return [0, 0];
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, [router]);
    return (
        <div className="h-screen bg-slate-50 relative">
            <div className="bg-green-500">
                <div className="container m-auto py-3 ">
                    <Title level={3} className="!font-medium !text-lime-50">Entrance Test</Title>
                </div>

            </div>
            <div className="container m-auto py-3">
                <div className="text-right">
                    <ClockCircleFilled className="!text-green-500"/> {time[0]}:{time[1]}
                </div>
                <p>1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolores numquam tenetur quos consequatur harum odio suscipit, facilis modi eveniet dicta quis velit quia consequuntur, animi eaque totam earum tempora?</p>
                <div className="grid gap-3 lg:w-1/3 md:1/2">
                    <Button type="default" className="!text-start" iconPosition="end" icon={<CheckCircleFilled className="!text-green-500"/>}>A: amswer 1 </Button>
                    <Button type="default">B: amswer b </Button>
                    <Button type="default">C: amswer c </Button>
                    <Button type="default">D: amswer d </Button>
                </div>
            </div>
            <div className="flex justify-end container m-auto gap-1 absolute bottom-10">
                <Button type="default">Previous</Button>
                <Button type="default">Next</Button>    
            </div>
        </div>
    );
}
export default Example