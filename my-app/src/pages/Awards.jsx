import bolt from '../img/Tonitrus_bolt.PNG'
import star from '../img/stella_star.PNG'
import manga1 from '../img/1.PNG'
import manga2 from '../img/2.PNG'
import manga3 from '../img/3.PNG'

const Awards = () => {
    return (
        <div className="content">
            <h1>Awards</h1>
            <table>
                <thead style={{color: "white",backgroundColor: "#f58742"}}>
                    <tr>
                        <th>Type</th>
                        <th>Event</th>
                        <th>Awarded</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img src={bolt} alt="Tonitrus Bolt" width={100} height={100}/></td>
                    <td><img src={manga1} alt="Manga" width={200} height={200}/></td>
                    <td>Chapter 8 Episode 6</td>
                    <td>In the orientation day, Damian and Anya had a quarrel, accumulating to the point when Anya 
                        became increasingly upset and eventually punched Damian. 
                        Due to her resorting to violence, she was supposed to be punished with three Tonitrus Bolts, 
                        but Henry managed to lower it to only one for her noble reason.</td>
                </tr>
                <tr>
                    <td><img src={star} alt="Stella Star" width={100} height={100}/></td>
                    <td><img src={manga2} alt="Manga" width={200} height={200}/></td>
                    <td>Chapter 16 Episode 11</td>
                    <td>When checking the temperature of the hospital pool water, Ken, a child in recovery, 
                        ended up falling in the pool and started drowning. Anya telepathically heard his cries for help and dove into the pool to save him. 
                        Loid ended up rescuing both of them. For helping to save Ken's life, Anya was awarded a Stella Star.</td>
                </tr>
                <tr>
                    <td><img src={bolt} alt="Tonitrus Bolt" width={100} height={100}/></td>
                    <td><img src={manga3} alt="Manga" width={200} height={200}/></td>
                    <td>Chapter 61</td>
                    <td>Donna Schlag was inspecting the students of Class 1-3 and Damian realized he doesn't have his handkerchief, 
                        which would result in a Tonitrus Bolt. Fearing Damian receiving a Bolt will jeopardize Operation Strix, 
                        Anya gave Damian her handkerchief thinking she might have another one. 
                        However, she didn't have a spare handkerchief and got a Tonitrus Bolt in the stead of Damian.</td>
                </tr>
                
                </tbody>
            </table>
        </div>
    )
}

export default Awards