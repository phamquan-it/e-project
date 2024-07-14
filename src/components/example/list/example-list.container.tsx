import React, { memo, useRef } from 'react';
import { Input, Button, Spin, List } from 'antd';
import { InputRef } from 'antd';
import styles from './example-list.module.css';
import { useExampleList } from './example-list.hook';
import NcExample from '../example.component';

type ExamplesContainerProps = {};

const ExampleListContainer = memo<ExamplesContainerProps>(function ExamplesContainer() {
    const inputRef = useRef<InputRef>(null); // Use InputRef from Ant Design
    const { examples, loading, createExample, deleteExample, updateExample } = useExampleList();

    const handleCreateExample = () => {
        if (inputRef.current) {
            const inputValue = inputRef.current.input?.value;
            createExample(inputValue);
            inputRef.current.input!.value = ''; // Clear the input field after adding an example
        }
    };

    return (
        <div className={styles.host}>
            <h2>Example list</h2>
            <div className={styles.block}>
                <Input ref={inputRef} style={{ marginRight: '8px', width: '300px' }} />
                <Button type="primary" onClick={handleCreateExample}>
                    Add example
                </Button>
            </div>
            <div className={styles.block}>
                {loading ? (
                    <Spin>Loading...</Spin>
                ) : (
                    <List
                        className={styles.list}
                        itemLayout="horizontal"
                        dataSource={examples}
                        renderItem={example => (
                            <List.Item className={styles.listItem} key={example.id}>
                                <NcExample
                                    model={example}
                                    updateExample={updateExample}
                                    deleteExample={deleteExample}
                                />
                            </List.Item>
                        )}
                    />
                )}
            </div>
        </div>
    );
});

export default ExampleListContainer;
