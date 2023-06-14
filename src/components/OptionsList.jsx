
export const OptionsList = () => {
  return (
    <ul style={{listStyle: 'none', padding:0, fontWeight: 'bold'}}>
        <li className='d-flex' style={{width:'100%', justifyContent:'space-between', marginBottom: 15}}>
            A - Z
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" />
            </div>
            {/* <input className="form-check-input" type="checkbox" /> */}
        </li>
        <li className='d-flex' style={{width:'100%', justifyContent:'space-between', marginBottom: 15}}>
            a - z
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" />
            </div>
            {/* <input type="checkbox" /> */}
        </li>
        <li className='d-flex' style={{width:'100%', justifyContent:'space-between', marginBottom: 15}}>
            !&@%#
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" />
            </div>
            {/* <input type="checkbox" /> */}
        </li>
        <li className='d-flex' style={{width:'100%', justifyContent:'space-between', marginBottom: 15}}>
            0 - 9
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" />
            </div>
            {/* <input type="checkbox" /> */}
        </li>
    </ul>
  )
}
