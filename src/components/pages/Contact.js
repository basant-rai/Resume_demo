import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='mt-5'>
            <div className='text-center' >
                <h3>CONTACT</h3>
                <div className='row mx-auto mt-5'style={{width:"80%"}}>
                    <div className='col-lg-8 col-sm-12  ' >
                        <form >
                            <div className='d-flex'>
                                <label for='name'></label>
                                <input className='form-control w-50 d-flex me-2' id='name' type='text' placeholder='Username' />

                                <label for='email'></label>
                                <input className='form-control w-50 d-flex' id='email' type='email' placeholder='Email address' />
                            </div>
                            <label ></label>
                            <input className='form-control' type='text' placeholder='Cost of your project' />

                            <label for='timeline'></label>
                            <input className='form-control' id='timeline' type='text' placeholder='Timeline' />

                            <label for='textarea'></label>
                            <textarea className="form-control" id="textarea" rows="10" placeholder="Don't forget that kindneess is all!"></textarea>


                        </form>
                    </div>
                    <div className='col-4'>


                    </div>

                </div>

                <div className='map mt-3'>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1767.056558425318!2d85.31682275821464!3d27.651971771559943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb177945fce439%3A0xef485e93b096f9e8!2sNakhipot%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1654938586697!5m2!1sen!2snp" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

        </div>

    )
}

export default Contact