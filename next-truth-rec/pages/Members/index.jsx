import Layout from "../../components/Layout";
import membersStyles from "../../public/jsx-styles/members-styles";
class MembersPage extends React.Component{
    render(){
        return(
    <Layout>
         <section class="main" id="main-section">
       <h2 className="title">Community Remembrance Project Committe</h2>
       <p className="note">Meetings are held every 2nd and 4th Wednesday of each month at 10 a.m.
        For meeting details, please contact Latoya Gainey at <span>lgainey@alachuacounty.us</span> or <span>call 352-264-6900</span></p>
     
       <div className="main-committee">
        <article className="committee-info one">
            <p className="committee-name">Charles S. Chestnut, IV</p>
            <p className="comittee-position">Chair</p>
        </article>

        <article className="committee-info two">
            <p className="committee-name"> Carl Smart</p>
            <p className="comittee-position">County Staff Liaison</p>
            <p className="committee-email"><span>Email:</span> csmart@alachuacounty.us</p>
        </article>

        <article className="committee-info three">
            <p className="committee-name"> Jackie Davis</p>
            <p className="comittee-position">Community Liaison:</p>
           
            <p className="committee-email"><span>Email:</span> jackie07davis@gmail.com</p>
        </article>
       </div>


       <div className="sub-committee">
           <h2 className="sub-title">Other sub committees throughout the area</h2>
          <article className="committee-info sub-row first">
              <p className="area">ALACHUA/NEWNANSVILLE AREAS</p>
            <p className="committee-name">Team Leader: Commissioner Shirley Brown</p>
            <p className="committee-email"><span>Email:</span> sh_brown@cityofalachua.org</p>
        </article>

        <article className="committee-info sub-row second">
            <p className="area">ARCHER AREA</p>
          <p className="committee-name">Team Leader: Lizzie Jenkins</p>
          <p className="committee-email"><span>Email:</span> lizzieprj@aol.com</p>
      </article>

       <article className="committee-info sub-row third">
              <p className="area">GAINESVILLE AREA</p>
            <p className="committee-name">Team Leader: Evelyn Foxxe</p>
            <p className="committee-email"><span>Email:</span> foxxe1948@gmail.com</p>
        </article>

        <article className="committee-info sub-row fourth">
            <p className="area">HAWTHORNE/WALDO AREA</p>
            <p className="committee-name">Team Leader: Pop Herring</p>
        </article>

        <article className="committee-info sub-row fifth">
            <p className="area">HIGH SPRINGS AREA</p>
            <p className="committee-name">Team Leader: Veloria Kelly</p>
            <p className="committee-email"><span>Email:</span> veloriak21@gmail.com</p>
        </article>

        <article className="committee-info sub-row sixth">
            <p className="area">MICANOPY AREA</p>
            <p className="committee-name">Team Leader: Melanie Barr</p>
            <p className="committee-email"><span>Email:</span> mvbarr@bellsouth.net</p>
        </article>

        <article className="committee-info sub-row seventh">
            <p className="area">MONTEOCHA/GORDON/ LACROSSE AREAS</p>
            <p className="committee-name">Team Leader: Ayoka Sowa La</p>
            <p className="committee-email"><span>Email:</span> niisowala51@gmail.com</p>
        </article>

        <article className="committee-info sub-row eighth">
            <p className="area">NEWBERRY AREA</p>
            <p className="committee-name">Team Leader: Mayor Jordan Marlowe</p>
            <p className="committee-email"><span>Email:</span> Jordan.Marlowe@ci.newberry.fl.us</p>
        </article>
         
       </div>
      
    </section>
        <style jsx>{membersStyles}</style>
     </Layout>
    )
        }
}

export default MembersPage;