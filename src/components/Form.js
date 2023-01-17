import '../styles/Form.css'

export function Form() {
    return (
        <div className='Form-component'>
            <div className="buttonBlock">
                <button>Блок 1</button>
                <button>Блок 2</button>
                <button>Блок 3</button>
            </div>
            <div className='formBox'>
                <form className='form'>
                    <label>Блок 1</label>
                    <div className='formGroup'>
                        <label className="label" htmlFor="name">Имя</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder='Введите имя' />
                    </div>
                    <div className='formGroup'>
                        <label className="label" htmlFor="name">Фамилия</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder='Введите фамилию' />
                    </div>
                </form>
            </div>
        </div>
    )
}