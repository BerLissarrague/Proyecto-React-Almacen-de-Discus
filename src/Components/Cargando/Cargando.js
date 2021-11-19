import React from 'react'
import { Spinner } from 'reactstrap';

const Cargando = () => {
    return (
        <div class="text-center" style={{margin:'8%'}}>
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    )
}

export default Cargando
