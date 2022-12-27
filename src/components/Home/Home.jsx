import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import AvailableUsers from '../AvailableUsers/AvailableUsers';

function Home() {

  const { loading, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() =>{
    if (!loading && !user){
      return navigate("/login")
    }
  }, [loading, user])

  if (loading === true) {
    return <h1>Cargando...</h1>
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm={8}>
          <h1 className='text-center'>Usuarios disponibles</h1>
          <AvailableUsers />
        </Col>
      </Row>
    </Container>
  )
}

export default Home