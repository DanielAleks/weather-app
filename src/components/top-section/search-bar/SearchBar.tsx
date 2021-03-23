import React, { useEffect, useRef, useState } from 'react'
import './x-search.sass'
import './x-dropdown-menu.sass'

function ImageSection({ weather, setCity, setIsModal, city, area, isModal }) {
  const [imageState, setImageState] = useState('')
  const inputRef = useRef()
  const buttonRef = useRef()

  const focusButton = (buttonRef) => {
    buttonRef.current.focus()
    setIsModal(false)
  }

  async function fetchImage() {

    // fetch(`./places.json`, {
    //   headers : { 
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //    }

    // })
    // .then((response) => response.json())
    // .then((messages) => {console.log("messages");});

    const theImage = await fetch('places.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    })
    const data = await theImage.json()
    setImageState(data)
    console.log(imageState, 'hello Im the ImageState. NICE TO MEET YOU!')
  }

  const focusInput = (inputRef) => {
    inputRef.current.focus()
    setIsModal(true)
  }

  useEffect(() => {
    focusInput(inputRef)
    fetchImage()
  }, [])

  useEffect(() => {
    whichImage()
  }, [city])

  const whichImage = () => {
    switch (city.split(" ")[city.toLowerCase().split(" ").length - 1]) {

      case 'Afghanistan': setImageState('https://images.pexels.com/photos/1484776/pexels-photo-1484776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'); break;
      case 'Albania': setImageState('https://images.pexels.com/photos/131920/pexels-photo-131920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'); break;
      case 'Algeria': setImageState('https://images.pexels.com/photos/5873913/pexels-photo-5873913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'); break;
      case 'Andorra': setImageState('https://images.pexels.com/photos/4319044/pexels-photo-4319044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'); break;
      case 'Angola': setImageState('https://images.pexels.com/photos/2767923/pexels-photo-2767923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'); break;
      case 'Argentina': setImageState('https://images.pexels.com/photos/3699812/pexels-photo-3699812.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'); break;
      case 'Armenia': setImageState('https://images.pexels.com/photos/4402879/pexels-photo-4402879.jpeg?cs=srgb&dl=pexels-nasser-ansari-4402879.jpg&fm=jpg'); break;
      case 'Australia': setImageState('https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?cs=srgb&dl=pexels-rijan-hamidovic-2193300.jpg&fm=jpg'); break;
      case 'Austria': setImageState('https://images.pexels.com/photos/1493088/pexels-photo-1493088.jpeg?cs=srgb&dl=pexels-rahat-ali-1493088.jpg&fm=jpg'); break;
      case 'Azerbaijan': setImageState('https://images.pexels.com/photos/2716795/pexels-photo-2716795.jpeg?cs=srgb&dl=pexels-rohit-potdar-2716795.jpg&fm=jpg'); break;
      case 'Bahamas': setImageState('https://images.pexels.com/photos/2598721/pexels-photo-2598721.jpeg?cs=srgb&dl=pexels-leonardo-rossatti-2598721.jpg&fm=jpg'); break;
      case 'Bahrain': setImageState('https://images.pexels.com/photos/6658661/pexels-photo-6658661.jpeg?cs=srgb&dl=pexels-satheesh-cholakkal-6658661.jpg&fm=jpg'); break;
      case 'Bangladesh': setImageState('https://images.pexels.com/photos/2382896/pexels-photo-2382896.jpeg?cs=srgb&dl=pexels-kelly-lacy-2382896.jpg&fm=jpg'); break;
      case 'Belarus': setImageState('https://images.pexels.com/photos/3442567/pexels-photo-3442567.jpeg?cs=srgb&dl=pexels-maryia-plashchynskaya-3442567.jpg&fm=jpg'); break;
      case 'Belgium': setImageState('https://images.pexels.com/photos/2587789/pexels-photo-2587789.jpeg?cs=srgb&dl=pexels-petar-star%C4%8Devi%C4%87-2587789.jpg&fm=jpg'); break;
      case 'Bolivia': setImageState('https://images.pexels.com/photos/3290069/pexels-photo-3290069.jpeg?cs=srgb&dl=pexels-alex-azabache-3290069.jpg&fm=jpg'); break;
      case 'Brazil': setImageState('https://images.pexels.com/photos/97906/pexels-photo-97906.jpeg?cs=srgb&dl=pexels-kaique-rocha-97906.jpg&fm=jpg'); break;
      case 'Bulgaria': setImageState('https://images.pexels.com/photos/1624216/pexels-photo-1624216.jpeg?cs=srgb&dl=pexels-indigo-blackwood-1624216.jpg&fm=jpg'); break;
      case 'Burma': setImageState('https://images.pexels.com/photos/7181244/pexels-photo-7181244.jpeg?cs=srgb&dl=pexels-marvin-wilske-7181244.jpg&fm=jpg'); break;
      case 'Verde': setImageState('https://images.pexels.com/photos/3558637/pexels-photo-3558637.jpeg?cs=srgb&dl=pexels-nuno-veludo-3558637.jpg&fm=jpg'); break;
      case 'Cambodia': setImageState('https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?cs=srgb&dl=pexels-vincent-gerbouin-3217663.jpg&fm=jpg'); break;
      case 'Canada': setImageState('https://images.pexels.com/photos/756790/pexels-photo-756790.jpeg?cs=srgb&dl=pexels-daniel-joseph-petty-756790.jpg&fm=jpg'); break;
      case 'Africa': setImageState('https://images.pexels.com/photos/2346216/pexels-photo-2346216.jpeg?cs=srgb&dl=pexels-jeffrey-czum-2346216.jpg&fm=jpg'); break;
      case 'Chile': setImageState('https://images.pexels.com/photos/2017747/pexels-photo-2017747.jpeg?cs=srgb&dl=pexels-alisha-lubben-2017747.jpg&fm=jpg'); break;
      case 'China': setImageState('https://images.pexels.com/photos/1653823/pexels-photo-1653823.jpeg?cs=srgb&dl=pexels-tom-fisk-1653823.jpg&fm=jpg'); break;
      case 'Colombia': setImageState('https://images.pexels.com/photos/1559699/pexels-photo-1559699.jpeg?cs=srgb&dl=pexels-luis-quintero-1559699.jpg&fm=jpg'); break;
      case 'Rica': setImageState('https://images.pexels.com/photos/58737/pexels-photo-58737.jpeg?cs=srgb&dl=pexels-adrianna-calvo-58737.jpg&fm=jpg'); break;
      case 'Croatia': setImageState('https://images.pexels.com/photos/2040626/pexels-photo-2040626.jpeg?cs=srgb&dl=pexels-jaxson-bryden-2040626.jpg&fm=jpg'); break;
      case 'Cuba': setImageState('https://images.pexels.com/photos/92871/pexels-photo-92871.jpeg?cs=srgb&dl=pexels-leonie-fahjen-92871.jpg&fm=jpg'); break;
      case 'Cyprus': setImageState('https://images.pexels.com/photos/373409/pexels-photo-373409.jpeg?cs=srgb&dl=pexels-pixabay-373409.jpg&fm=jpg'); break;
      case 'Czechia': setImageState('https://images.pexels.com/photos/753337/pexels-photo-753337.jpeg?cs=srgb&dl=pexels-julius-silver-753337.jpg&fm=jpg'); break;
      case 'Denmark': setImageState('https://images.pexels.com/photos/416024/pexels-photo-416024.jpeg?cs=srgb&dl=pexels-pixabay-416024.jpg&fm=jpg'); break;
      case 'Republic': setImageState('https://images.pexels.com/photos/2598683/pexels-photo-2598683.jpeg?cs=srgb&dl=pexels-leonardo-rossatti-2598683.jpg&fm=jpg'); break;
      case 'Ecuador': setImageState('https://images.pexels.com/photos/2873419/pexels-photo-2873419.jpeg?cs=srgb&dl=pexels-kelly-lacy-2873419.jpg&fm=jpg'); break;
      case 'Egypt': setImageState('https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?cs=srgb&dl=pexels-david-mceachan-71241.jpg&fm=jpg'); break;
      case 'Salvador': setImageState('https://images.pexels.com/photos/3540318/pexels-photo-3540318.jpeg?cs=srgb&dl=pexels-aviv-perets-3540318.jpg&fm=jpg'); break;
      case 'Estonia': setImageState('https://images.pexels.com/photos/3224113/pexels-photo-3224113.jpeg?cs=srgb&dl=pexels-hert-niks-3224113.jpg&fm=jpg'); break;
      case 'Ethiopia': setImageState('https://images.pexels.com/photos/6742986/pexels-photo-6742986.jpeg?cs=srgb&dl=pexels-lan-yao-6742986.jpg&fm=jpg'); break;
      case 'Fiji': setImageState('https://images.pexels.com/photos/5263082/pexels-photo-5263082.jpeg?cs=srgb&dl=pexels-brett-jordan-5263082.jpg&fm=jpg'); break;
      case 'Finland': setImageState('https://images.pexels.com/photos/2311602/pexels-photo-2311602.jpeg?cs=srgb&dl=pexels-tapio-haaja-2311602.jpg&fm=jpg'); break;
      case 'France': setImageState('https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?cs=srgb&dl=pexels-marcin-gierbisz-1125212.jpg&fm=jpg'); break;
      case 'Georgia': setImageState('https://images.pexels.com/photos/2990775/pexels-photo-2990775.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-2990775.jpg&fm=jpg'); break;
      case 'Germany': setImageState('https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?cs=srgb&dl=pexels-shvets-anna-2570063.jpg&fm=jpg'); break;
      case 'Ghana': setImageState('https://images.pexels.com/photos/5929514/pexels-photo-5929514.jpeg?cs=srgb&dl=pexels-ali-khalil-5929514.jpg&fm=jpg'); break;
      case 'Greece': setImageState('https://images.pexels.com/photos/3264723/pexels-photo-3264723.jpeg?cs=srgb&dl=pexels-alex-azabache-3264723.jpg&fm=jpg'); break;
      case 'Guatemala': setImageState('https://images.pexels.com/photos/5484643/pexels-photo-5484643.jpeg?cs=srgb&dl=pexels-mike-van-schoonderwalt-5484643.jpg&fm=jpg'); break;
      case 'Haiti': setImageState('https://images.pexels.com/photos/4637289/pexels-photo-4637289.png?cs=srgb&dl=pexels-junior-ceranor-nelson-4637289.jpg&fm=jpg'); break;
      case 'Hungary': setImageState('https://images.pexels.com/photos/47727/budapest-church-architecture-matthias-church-47727.jpeg?cs=srgb&dl=pexels-pixabay-47727.jpg&fm=jpg'); break;
      case 'Iceland': setImageState('https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?cs=srgb&dl=pexels-benjamin-suter-3617500.jpg&fm=jpg'); break;
      case 'India': setImageState('https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?cs=srgb&dl=pexels-victor-lavaud-3361480.jpg&fm=jpg'); break;
      case 'Indonesia': setImageState('https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg?cs=srgb&dl=pexels-aron-visuals-1643130.jpg&fm=jpg'); break;
      case 'Iran': setImageState('https://images.pexels.com/photos/3877624/pexels-photo-3877624.jpeg?cs=srgb&dl=pexels-muhammad-nuri-3877624.jpg&fm=jpg'); break;
      case 'Iraq': setImageState('https://images.pexels.com/photos/2784992/pexels-photo-2784992.jpeg?cs=srgb&dl=pexels-hisham-yahya-2784992.jpg&fm=jpg'); break;
      case 'Ireland': setImageState('https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?cs=srgb&dl=pexels-kelly-lacy-2382681.jpg&fm=jpg'); break;
      case 'Israel': setImageState('https://images.pexels.com/photos/1194396/pexels-photo-1194396.jpeg?cs=srgb&dl=pexels-toa-heftiba-%C5%9Finca-1194396.jpg&fm=jpg'); break;
      case 'Italy': setImageState('https://images.pexels.com/photos/2225439/pexels-photo-2225439.jpeg?cs=srgb&dl=pexels-mark-neal-2225439.jpg&fm=jpg'); break;
      case 'Jamaica': setImageState('https://images.pexels.com/photos/1030322/pexels-photo-1030322.png?cs=srgb&dl=pexels-jose-espinal-1030322.jpg&fm=jpg'); break;
      case 'Japan': setImageState('https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-3408354.jpg&fm=jpg'); break;
      case 'Jordan': setImageState('https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?cs=srgb&dl=pexels-abdullah-ghatasheh-1631665.jpg&fm=jpg'); break;
      case 'Kazakhstan': setImageState('https://images.pexels.com/photos/2475746/pexels-photo-2475746.jpeg?cs=srgb&dl=pexels-konevi-2475746.jpg&fm=jpg'); break;
      case 'Kenya': setImageState('https://images.pexels.com/photos/4242550/pexels-photo-4242550.jpeg?cs=srgb&dl=pexels-art-jamie%27s-4242550.jpg&fm=jpg'); break;
      case 'Korea': setImageState('https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?cs=srgb&dl=pexels-pixabay-237211.jpg&fm=jpg'); break;
      case 'Kuwait': setImageState('https://images.pexels.com/photos/1598338/pexels-photo-1598338.jpeg?cs=srgb&dl=pexels-senuscape-1598338.jpg&fm=jpg'); break;
      case 'Kyrgyzstan': setImageState('https://images.pexels.com/photos/5111084/pexels-photo-5111084.jpeg?cs=srgb&dl=pexels-azamat-esenaliev-5111084.jpg&fm=jpg'); break;
      case 'Laos': setImageState('https://images.pexels.com/photos/924631/pexels-photo-924631.jpeg?cs=srgb&dl=pexels-suraphat-nueaon-924631.jpg&fm=jpg'); break;
      case 'Latvia': setImageState('https://images.pexels.com/photos/681405/pexels-photo-681405.jpeg?cs=srgb&dl=pexels-aleksejs-bergmanis-681405.jpg&fm=jpg'); break;
      case 'Lebanon': setImageState('https://images.pexels.com/photos/3610377/pexels-photo-3610377.jpeg?cs=srgb&dl=pexels-boris-ulzibat-3610377.jpg&fm=jpg'); break;
      case 'Lithuania': setImageState('https://images.pexels.com/photos/2350345/pexels-photo-2350345.png?cs=srgb&dl=pexels-david-skyrius-2350345.jpg&fm=jpg'); break;
      case 'Luxembourg': setImageState('https://images.pexels.com/photos/6089395/pexels-photo-6089395.jpeg?cs=srgb&dl=pexels-stefano-risso-6089395.jpg&fm=jpg'); break;
      case 'Madagascar': setImageState('https://images.pexels.com/photos/145977/pexels-photo-145977.jpeg?cs=srgb&dl=pexels-flickr-145977.jpg&fm=jpg'); break;
      case 'Malaysia': setImageState('https://images.pexels.com/photos/22804/pexels-photo.jpg?cs=srgb&dl=pexels-zukiman-mohamad-22804.jpg&fm=jpg'); break;
      case 'Maldives': setImageState('https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3601426.jpg&fm=jpg'); break;
      case 'Malta': setImageState('https://images.pexels.com/photos/3496763/pexels-photo-3496763.jpeg?cs=srgb&dl=pexels-som-thapa-magar-3496763.jpg&fm=jpg'); break;
      case 'Islands': setImageState('https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?cs=srgb&dl=pexels-fabian-wiktor-994605.jpg&fm=jpg'); break;
      case 'Mauritius': setImageState('https://images.pexels.com/photos/3703465/pexels-photo-3703465.jpeg?cs=srgb&dl=pexels-michal-marek-3703465.jpg&fm=jpg'); break;
      case 'Mexico': setImageState('https://images.pexels.com/photos/1573471/pexels-photo-1573471.jpeg?cs=srgb&dl=pexels-ricardo-esquivel-1573471.jpg&fm=jpg'); break;
      case 'Moldova': setImageState('https://images.pexels.com/photos/205077/pexels-photo-205077.jpeg?cs=srgb&dl=pexels-nicolae-cas%C3%AEr-205077.jpg&fm=jpg'); break;
      case 'Monaco': setImageState('https://images.pexels.com/photos/3586/port-yachts-monaco-luxury.jpg?cs=srgb&dl=pexels-j%C3%A9shoots-3586.jpg&fm=jpg'); break;
      case 'Mongolia': setImageState('https://images.pexels.com/photos/2689623/pexels-photo-2689623.jpeg?cs=srgb&dl=pexels-sungmu-heo-2689623.jpg&fm=jpg'); break;
      case 'Montenegro': setImageState('https://images.pexels.com/photos/2845801/pexels-photo-2845801.jpeg?cs=srgb&dl=pexels-maksim-dyachuk-2845801.jpg&fm=jpg'); break;
      case 'Morocco': setImageState('https://images.pexels.com/photos/943510/pexels-photo-943510.jpeg?cs=srgb&dl=pexels-nicolas-postiglioni-943510.jpg&fm=jpg'); break;
      case 'Namibia': setImageState('https://images.pexels.com/photos/6642272/pexels-photo-6642272.jpeg?cs=srgb&dl=pexels-dick-hoskins-6642272.jpg&fm=jpg'); break;
      case 'Nepal': setImageState('https://images.pexels.com/photos/3097592/pexels-photo-3097592.jpeg?cs=srgb&dl=pexels-kfitz-3097592.jpg&fm=jpg'); break;
      case 'Netherlands': setImageState('https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?cs=srgb&dl=pexels-kata-pal-1258865.jpg&fm=jpg'); break;
      case 'Zealand': setImageState('https://images.pexels.com/photos/572689/pexels-photo-572689.jpeg?cs=srgb&dl=pexels-tyler-lastovich-572689.jpg&fm=jpg'); break;
      case 'Nicaragua': setImageState('https://images.pexels.com/photos/3470478/pexels-photo-3470478.jpeg?cs=srgb&dl=pexels-fabian-wiktor-3470478.jpg&fm=jpg'); break;
      case 'Nigeria': setImageState('https://images.pexels.com/photos/3172830/pexels-photo-3172830.jpeg?cs=srgb&dl=pexels-mcbarth%E2%84%A2-obeya-3172830.jpg&fm=jpg'); break;
      case 'Macedonia': setImageState('https://images.pexels.com/photos/4616611/pexels-photo-4616611.jpeg?cs=srgb&dl=pexels-tamas-marton-4616611.jpg&fm=jpg'); break;
      case 'Norway': setImageState('https://images.pexels.com/photos/1940038/pexels-photo-1940038.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-1940038.jpg&fm=jpg'); break;
      case 'Oman': setImageState('https://images.pexels.com/photos/6241206/pexels-photo-6241206.jpeg?cs=srgb&dl=pexels-kavinda-yapa-6241206.jpg&fm=jpg'); break;
      case 'Pakistan': setImageState('https://images.pexels.com/photos/1454405/pexels-photo-1454405.jpeg?cs=srgb&dl=pexels-aakash-ashraf-1454405.jpg&fm=jpg'); break;
      case 'Panama': setImageState('https://images.pexels.com/photos/1587097/pexels-photo-1587097.jpeg?cs=srgb&dl=pexels-luis-quintero-1587097.jpg&fm=jpg'); break;
      case 'Peru': setImageState('https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?cs=srgb&dl=pexels-errin-casano-2356045.jpg&fm=jpg'); break;
      case 'Philippines': setImageState('https://images.pexels.com/photos/1098322/pexels-photo-1098322.jpeg?cs=srgb&dl=pexels-christian-paul-del-rosario-1098322.jpg&fm=jpg'); break;
      case 'Poland': setImageState('https://images.pexels.com/photos/10676/Warsaw-center-free-license-CC0.jpg?cs=srgb&dl=pexels-skitterphoto-10676.jpg&fm=jpg'); break;
      case 'Portugal': setImageState('https://images.pexels.com/photos/9253/sea-city-landscape-sky.jpg?cs=srgb&dl=pexels-skitterphoto-9253.jpg&fm=jpg'); break;
      case 'Qatar': setImageState('https://images.pexels.com/photos/3789026/pexels-photo-3789026.jpeg?cs=srgb&dl=pexels-abdullah-ghatasheh-3789026.jpg&fm=jpg'); break;
      case 'Romania': setImageState('https://images.pexels.com/photos/163572/iron-gate-karparten-danube-gorge-abbey-163572.jpeg?cs=srgb&dl=pexels-pixabay-163572.jpg&fm=jpg'); break;
      case 'Russia': setImageState('https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?cs=srgb&dl=pexels-pixabay-236294.jpg&fm=jpg'); break;
      case 'Marino': setImageState('https://images.pexels.com/photos/6246192/pexels-photo-6246192.jpeg?cs=srgb&dl=pexels-jonathan-emili-6246192.jpg&fm=jpg'); break;
      case 'Arabia': setImageState('https://images.pexels.com/photos/5561857/pexels-photo-5561857.jpeg?cs=srgb&dl=pexels-jad-el-mourad-5561857.jpg&fm=jpg'); break;
      case 'Serbia': setImageState('https://images.pexels.com/photos/395243/pexels-photo-395243.jpeg?cs=srgb&dl=pexels-slondotpics-395243.jpg&fm=jpg'); break;
      case 'Seychelles': setImageState('https://images.pexels.com/photos/5044865/pexels-photo-5044865.jpeg?cs=srgb&dl=pexels-holger-wulschlaeger-5044865.jpg&fm=jpg'); break;
      case 'Leone': setImageState('https://images.pexels.com/photos/53300/pexels-photo-53300.jpeg?cs=srgb&dl=pexels-agustin-pi%C3%B1ero-53300.jpg&fm=jpg'); break;
      case 'Singapore': setImageState('https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?cs=srgb&dl=pexels-timo-volz-1842332.jpg&fm=jpg'); break;
      case 'Slovakia': setImageState('https://images.pexels.com/photos/280173/pexels-photo-280173.jpeg?cs=srgb&dl=pexels-pixabay-280173.jpg&fm=jpg'); break
      case 'Slovenia': setImageState('https://images.pexels.com/photos/3045635/pexels-photo-3045635.jpeg?cs=srgb&dl=pexels-fnfoto-3045635.jpg&fm=jpg'); break;
      case 'Spain': setImageState('https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-1388030.jpg&fm=jpg'); break;
      case 'Lanka': setImageState('https://images.pexels.com/photos/739409/pexels-photo-739409.jpeg?cs=srgb&dl=pexels-eugene-dorosh-739409.jpg&fm=jpg'); break;
      case 'Sweden': setImageState('https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?cs=srgb&dl=pexels-jonathan-petersson-1198507.jpg&fm=jpg'); break;
      case 'Switzerland': setImageState('https://images.pexels.com/photos/1291766/pexels-photo-1291766.jpeg?cs=srgb&dl=pexels-matheus-guimar%C3%A3es-1291766.jpg&fm=jpg'); break;
      case 'Tanzania': setImageState('https://images.pexels.com/photos/3581847/pexels-photo-3581847.jpeg?cs=srgb&dl=pexels-pepe-caspers-3581847.jpg&fm=jpg'); break;
      case 'Thailand': setImageState('https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?cs=srgb&dl=pexels-pixabay-415708.jpg&fm=jpg'); break;
      case 'Tunisia': setImageState('https://images.pexels.com/photos/891116/pexels-photo-891116.jpeg?cs=srgb&dl=pexels-bedis-elacheche-891116.jpg&fm=jpg'); break;
      case 'Turkey': setImageState('https://images.pexels.com/photos/1836580/pexels-photo-1836580.jpeg?cs=srgb&dl=pexels-muharrem-ayd%C4%B1n-1836580.jpg&fm=jpg'); break;
      case 'Uganda': setImageState('https://images.pexels.com/photos/5416967/pexels-photo-5416967.jpeg?cs=srgb&dl=pexels-harvey-sapir-5416967.jpg&fm=jpg'); break;
      case 'Ukraine': setImageState('https://images.pexels.com/photos/2787267/pexels-photo-2787267.jpeg?cs=srgb&dl=pexels-alexandr-podvalny-2787267.jpg&fm=jpg'); break;
      case 'Kingdom': setImageState('https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?cs=srgb&dl=pexels-dominika-gregu%C5%A1ov%C3%A1-672532.jpg&fm=jpg'); break;
      case 'Uruguay': setImageState('https://images.pexels.com/photos/5656257/pexels-photo-5656257.jpeg?cs=srgb&dl=pexels-alex-brites-5656257.jpg&fm=jpg'); break;
      case 'Uzbekistan': setImageState('https://images.pexels.com/photos/5869122/pexels-photo-5869122.jpeg?cs=srgb&dl=pexels-abdullah-aydin-5869122.jpg&fm=jpg'); break;
      case 'Vietnam': setImageState('https://images.pexels.com/photos/2582757/pexels-photo-2582757.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-2582757.jpg&fm=jpg'); break;
      case 'Alabama': setImageState('https://images.pexels.com/photos/220324/pexels-photo-220324.jpeg?cs=srgb&dl=pexels-pixabay-220324.jpg&fm=jpg'); break;
      case 'Alaska': setImageState('https://images.pexels.com/photos/35637/alaska-glacier-ice-mountains.jpg?cs=srgb&dl=pexels-pixabay-35637.jpg&fm=jpg'); break;
      case 'Arizona': setImageState('https://images.pexels.com/photos/414136/pexels-photo-414136.jpeg?cs=srgb&dl=pexels-pixabay-414136.jpg&fm=jpg'); break;
      case 'Arkansas': setImageState('https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?cs=srgb&dl=pexels-luis-dalvan-1770809.jpg&fm=jpg'); break;
      case 'California': setImageState('https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?cs=srgb&dl=pexels-pixabay-208745.jpg&fm=jpg'); break;
      case 'Colorado': setImageState('https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?cs=srgb&dl=pexels-pixabay-221502.jpg&fm=jpg'); break;
      case 'Delaware': setImageState('https://images.pexels.com/photos/1529746/pexels-photo-1529746.jpeg?cs=srgb&dl=pexels-craig-adderley-1529746.jpg&fm=jpg'); break;
      case 'Florida': setImageState('https://images.pexels.com/photos/105950/pexels-photo-105950.jpeg?cs=srgb&dl=pexels-valentina-rossoni-105950.jpg&fm=jpg'); break;
      case 'Georgia': setImageState('https://images.pexels.com/photos/2990775/pexels-photo-2990775.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-2990775.jpg&fm=jpg'); break;
      case 'Hawaii': setImageState('https://images.pexels.com/photos/2526044/pexels-photo-2526044.jpeg?cs=srgb&dl=pexels-matthew-devries-2526044.jpg&fm=jpg'); break;
      case 'Idaho': setImageState('https://images.pexels.com/photos/937524/pexels-photo-937524.jpeg?cs=srgb&dl=pexels-brett-sayles-937524.jpg&fm=jpg'); break;
      case 'Illinois': setImageState('https://images.pexels.com/photos/2589011/pexels-photo-2589011.jpeg?cs=srgb&dl=pexels-trace-hudson-2589011.jpg&fm=jpg'); break;
      case 'Indiana': setImageState('https://images.pexels.com/photos/3573383/pexels-photo-3573383.jpeg?cs=srgb&dl=pexels-josh-hild-3573383.jpg&fm=jpg'); break;
      case 'Iowa': setImageState('https://images.pexels.com/photos/236541/pexels-photo-236541.jpeg?cs=srgb&dl=pexels-pixabay-236541.jpg&fm=jpg'); break;
      case 'Kansas': setImageState('https://images.pexels.com/photos/349506/pexels-photo-349506.jpeg?cs=srgb&dl=pexels-andrew-peterson-349506.jpg&fm=jpg'); break;
      case 'Kentucky': setImageState('https://images.pexels.com/photos/2042161/pexels-photo-2042161.jpeg?cs=srgb&dl=pexels-brandon-randolph-2042161.jpg&fm=jpg'); break;
      case 'Louisiana': setImageState('https://images.pexels.com/photos/3908304/pexels-photo-3908304.jpeg?cs=srgb&dl=pexels-sophia-3908304.jpg&fm=jpg'); break;
      case 'Maine': setImageState('https://images.pexels.com/photos/5372828/pexels-photo-5372828.jpeg?cs=srgb&dl=pexels-kristina-gain-5372828.jpg&fm=jpg'); break;
      case 'Maryland': setImageState('https://images.pexels.com/photos/4426312/pexels-photo-4426312.jpeg?cs=srgb&dl=pexels-lapography-4426312.jpg&fm=jpg'); break;
      case 'Massachusetts': setImageState('https://images.pexels.com/photos/5627116/pexels-photo-5627116.jpeg?cs=srgb&dl=pexels-andr%C3%A9s-garc%C3%ADa-5627116.jpg&fm=jpg'); break;
      case 'Michigan': setImageState('https://images.pexels.com/photos/702343/pexels-photo-702343.jpeg?cs=srgb&dl=pexels-anon-702343.jpg&fm=jpg'); break;
      case 'Minnesota': setImageState('https://images.pexels.com/photos/4190056/pexels-photo-4190056.jpeg?cs=srgb&dl=pexels-josh-hild-4190056.jpg&fm=jpg'); break;
      case 'Mississippi': setImageState('https://images.pexels.com/photos/4320303/pexels-photo-4320303.jpeg?cs=srgb&dl=pexels-josh-hild-4320303.jpg&fm=jpg'); break;
      case 'Missouri': setImageState('https://images.pexels.com/photos/5147543/pexels-photo-5147543.jpeg?cs=srgb&dl=pexels-michael-gattorna-5147543.jpg&fm=jpg'); break;
      case 'Montana': setImageState('https://images.pexels.com/photos/534398/pexels-photo-534398.jpeg?cs=srgb&dl=pexels-kerry-534398.jpg&fm=jpg'); break;
      case 'Nebraska': setImageState('https://images.pexels.com/photos/776614/pexels-photo-776614.jpeg?cs=srgb&dl=pexels-tonya-kumpula-776614.jpg&fm=jpg'); break;
      case 'Nevada': setImageState('https://images.pexels.com/photos/258118/pexels-photo-258118.jpeg?cs=srgb&dl=pexels-pixabay-258118.jpg&fm=jpg'); break;
      case 'Hampshire': setImageState('https://images.pexels.com/photos/2089977/pexels-photo-2089977.jpeg?cs=srgb&dl=pexels-leah-kelley-2089977.jpg&fm=jpg'); break;
      case 'Jersey': setImageState('https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?cs=srgb&dl=pexels-quintin-gellar-313782.jpg&fm=jpg'); break;
      case 'Mexico': setImageState('https://images.pexels.com/photos/2440079/pexels-photo-2440079.jpeg?cs=srgb&dl=pexels-ian-beckley-2440079.jpg&fm=jpg'); break;
      case 'York': setImageState('https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?cs=srgb&dl=pexels-roberto-vivancos-2190283.jpg&fm=jpg'); break;
      case 'Carolina': setImageState('https://images.pexels.com/photos/733162/pexels-photo-733162.jpeg?cs=srgb&dl=pexels-iconcom-733162.jpg&fm=jpg'); break;
      case 'Dakota': setImageState('https://images.pexels.com/photos/4558580/pexels-photo-4558580.jpeg?cs=srgb&dl=pexels-matheus-bertelli-4558580.jpg&fm=jpg'); break;
      case 'Ohio': setImageState('https://images.pexels.com/photos/290120/pexels-photo-290120.jpeg?cs=srgb&dl=pexels-pixabay-290120.jpg&fm=jpg'); break;
      case 'Oklahoma': setImageState('https://images.pexels.com/photos/4814534/pexels-photo-4814534.jpeg?cs=srgb&dl=pexels-raychel-sanner-4814534.jpg&fm=jpg'); break;
      case 'Oregon': setImageState('https://images.pexels.com/photos/2291427/pexels-photo-2291427.jpeg?cs=srgb&dl=pexels-elijah-akala-2291427.jpg&fm=jpg'); break;
      case 'Pennsylvania': setImageState('https://images.pexels.com/photos/4642501/pexels-photo-4642501.jpeg?cs=srgb&dl=pexels-kelly-lacy-4642501.jpg&fm=jpg'); break;
      case 'Carolina': setImageState('https://images.pexels.com/photos/5679217/pexels-photo-5679217.jpeg?cs=srgb&dl=pexels-gapeppy-5679217.jpg&fm=jpg'); break;
      case 'Dakota': setImageState('https://images.pexels.com/photos/4194067/pexels-photo-4194067.jpeg?cs=srgb&dl=pexels-samuel-karle-4194067.jpg&fm=jpg'); break;
      case 'Tennessee': setImageState('https://images.pexels.com/photos/2350459/pexels-photo-2350459.jpeg?cs=srgb&dl=pexels-kelly-lacy-2350459.jpg&fm=jpg'); break;
      case 'Texas': setImageState('https://images.unsplash.com/photo-1586794000129-536f1bc43cca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'); break;
      case 'Utah': setImageState('https://images.pexels.com/photos/62600/pexels-photo-62600.jpeg?cs=srgb&dl=pexels-chris-janda-62600.jpg&fm=jpg'); break;
      case 'Vermont': setImageState('https://images.pexels.com/photos/189243/pexels-photo-189243.jpeg?cs=srgb&dl=pexels-william-alexander-189243.jpg&fm=jpg'); break;
      case 'Virginia': setImageState('https://images.pexels.com/photos/5692812/pexels-photo-5692812.jpeg?cs=srgb&dl=pexels-bryant%27s-juarez-5692812.jpg&fm=jpg'); break;
      case 'Washington': setImageState('https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?cs=srgb&dl=pexels-chait-goli-1796730.jpg&fm=jpg'); break;
      case 'Virginia': setImageState('https://images.pexels.com/photos/322681/pexels-photo-322681.jpeg?cs=srgb&dl=pexels-jessica-monte-322681.jpg&fm=jpg'); break;
      case 'Wisconsin': setImageState('https://images.pexels.com/photos/4557960/pexels-photo-4557960.jpeg?cs=srgb&dl=pexels-todd-trapani-4557960.jpg&fm=jpg'); break;
      case 'Wyoming': setImageState('https://images.pexels.com/photos/4227153/pexels-photo-4227153.jpeg?cs=srgb&dl=pexels-todd-trapani-4227153.jpg&fm=jpg'); break;
      default:
        setImageState('https://images.pexels.com/photos/2587789/pexels-photo-2587789.jpeg?cs=srgb&dl=pexels-petar-star%C4%8Devi%C4%87-2587789.jpg&fm=jpg')
    }
  }

  return (
    <div className='search-container' >
      <div >
        <input
          type="text"
          value={city}
          ref={inputRef}
          onClick={() => setIsModal(true)}
          className='long-input'
          placeholder='enter city'
          onChange={(e) => setCity(e.target.value)}
        />
        <div className='input-dropdown'>
          {area.length >= 3 && isModal &&
            area.map((item) =>
              <div onClick={() => {
                setCity(item.name)
                weather()
                focusButton(buttonRef)
              }}
                className='possible-locations-btn'>
                {item.name}
              </div>
            )}
        </div>
        {area.length <= 3 &&
          <p className='error-length'>not enough letters</p>}
        <button ref={buttonRef} onClick={() => {
          weather()
          setIsModal(false)
        }}>search</button>
      </div>


      <img className='dynamic-image' src={imageState} alt="image-failed" />

    </div >
  )
}

export default ImageSection