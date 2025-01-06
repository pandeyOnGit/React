import React, { useState, createRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Text from '../components/Text';
import html2canvas from 'html2canvas';

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const addText = () => {
        setCount(count + 1);
    };

    const memeRef = createRef();

    const saveImage = () => {
        html2canvas(memeRef.current).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'meme.png';
            link.click();
        });
    };

    return (
      <div style={styles.editPage}>
        <div ref={memeRef} style={styles.meme}>
            <img src={params.get("url")} style={styles.memeImage} alt="Some Meme" />
            {
                Array(count).fill(0).map((_, index) => <Text key={index} />)
            }
        </div>
        <div style={styles.buttons}>
            <Button style={styles.addTextBtn} onClick={addText}>Add text</Button>
            <Button variant="success" style={styles.saveBtn} onClick={saveImage}>Save</Button>
        </div>
      </div>
    );
};

const styles = {
    editPage: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        background: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
    },
    meme: {
        position: 'relative',
        background: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '10px'
    },
    memeImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        objectFit: 'cover'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px'
    },
    addTextBtn: {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '8px',
        background: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    },
    saveBtn: {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '8px',
        background: '#28a745',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    }
};

export default EditPage;
