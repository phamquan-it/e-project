import { Affix, Button, Select, Table } from "antd";
import Title from "antd/es/typography/Title";
import { useRouter } from "next/router";

const EntranceTest = () => {
    const router  = useRouter()
    const options = [
        {
            label: "Example 1",
            value: 1
        }
    ]
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
            title: 'Id',
            dataIndex: 'key',
            key: 'key',
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Total',
            dataIndex: 'address',
            key: 'address',
          },
      ];
      
    return (
        <div className="h-screen bg-slate-50">
            <div className="bg-green-500">
                <div className="container m-auto py-3">
                    <Title level={3} className="!font-medium !text-lime-50">Entrance Test</Title>
                </div>

            </div>
            <div className="container  m-auto py-2">
                <Select
                    style={{ width: 200 }}
                    placeholder="Choose an example.."
                    options={options}
                >

                </Select>
                
                <Table dataSource={dataSource} columns={columns} pagination={false}/>
                <Affix offsetBottom={10} className="py-4" style={{
            left:10
           }}>
           <Button type="primary" onClick={()=>{
                router.push("/test/example")
           }}>Start  example</Button>
           </Affix>
                
            </div>
           
           
            
        </div>
    );
}
export default EntranceTest