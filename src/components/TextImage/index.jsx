import Button from '../Button'
import IconText from '../IconText'
import './TextImage.css'
import user from '/src/assets/User.png'
import artworks from '/src/assets/Artworks.png'
import artists from '/src/assets/Artists.png'   
import wallet from '/src/assets/Wallet.png'

export default function TextImage() {
    return (
        <>
            <section className='text-image'>
                <div className='flex-div'>
                    <div className=' container left-div'>
                        <p className='overline'>Overline</p>
                        <h1>Sapien ipsum scelerisque convallis fusce</h1>
                        <p className='description'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                        <div className='button-div'>
                            <Button primary text='Get started' />
                            <Button primary={false} text='Learn more' />
                        </div>
                    </div>
                    <div className='container right-div'>
                        <img src="src/assets/RightImage.png" alt="A can of ink and an circular icon similar to a pizza graph." />
                    </div>
                </div>

                <hr />
                <div className='icons'>
                    <IconText icon={user} h1='300k' text='Users Active'/>
                    <IconText icon={artworks} h1='52.5k' text='Artworks'/>
                    <IconText icon={artists} h1='17,5k' text='Artists'/>
                    <IconText icon={wallet} h1='35.58' text='ETH Spent'/>
                </div>
            </section>
        </>

    )
}