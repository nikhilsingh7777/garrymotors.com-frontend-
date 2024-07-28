import React from 'react'
import styles from "./Companies.module.css"

const Companies = () => {
  return (
    <div className={styles.container}>
      <h1>CHOOSE THE BEST IN CLASS!</h1>
      <div className={styles.grid}>
        <div className={styles.item}>
          <img src="https://cdn.luxe.digital/media/20231011131950/largest-car-companies-toyota-logo-luxe-digital.png.webp" alt="Toyota" />
          <p>Toyota</p>
        </div>
        <div className={styles.item}>
          <img src="https://cdn.luxe.digital/media/20231011132039/largest-car-companies-ford-motor-logo-luxe-digital.png.webp" alt="Ford" />
          <p>Ford</p>
        </div>
        <div className={styles.item}>
          <img src="https://logos-world.net/wp-content/uploads/2021/03/Hyundai-Logo-1990-present.png" alt="Hyundai" />
          <p>Hyundai</p>
        </div>
        <div className={styles.item}>
          <img src="https://cdn.luxe.digital/media/20231011131916/largest-car-companies-stellantis-logo-luxe-digital.png.webp" alt="Stellantis" />
          <p>Stellantis</p>
        </div>
        <div className={styles.item}>
          <img src="https://cdn.luxe.digital/media/20231011132002/largest-car-companies-volkswagen-logo-luxe-digital.png.webp" alt="Volkswagen" />
          <p>Volkswagen</p>
        </div>
        <div className={styles.item}>
          <img src="https://cdn.luxe.digital/media/20231011131851/largest-car-companies-mercedes-benz-logo-luxe-digital.png.webp" alt="Mercedes-Benz" />
          <p>Mercedes-Benz</p>
        </div>
        <div className={styles.item}>
          <img src="https://cdn.luxe.digital/media/20231011132016/largest-car-companies-bmw-logo-luxe-digital.png.webp" alt="BMW" />
          <p>BMW</p>
        </div>
        <div className={styles.item}>
          <img src="https://cdn.luxe.digital/media/20231011132108/largest-car-companies-honda-logo-luxe-digital.png.webp" alt="Honda" />
          <p>Honda</p>
        </div>
        <div className={styles.item}>
          <img src="https://cdn.luxe.digital/media/20231011131944/largest-car-companies-tesla-logo-luxe-digital.png.webp" alt="Tesla" />
          <p>Tesla</p>
        </div>
        <div className={styles.item}>
          <img src="https://cdn.luxe.digital/media/20231011131853/largest-car-companies-nissan-logo-luxe-digital.png.webp" alt="Nissan" />
          <p>Nissan</p>
        </div>
        <div className={styles.item}>
          <img src="https://www.carlogos.org/logo/Volvo-logo-2014-1920x1080.png" alt="" />
          <p>Volvo</p>
        </div>
        <div className={styles.item}>
          <img src="https://www.freepnglogos.com/uploads/land-rover-png-logo/land-rover-logo-land-rover-car-symbol-png-logo-5.png" alt="" />
          <p>Range Rover</p>
        </div>
        <div className={styles.item}>
          <img src="https://seeklogo.com/images/F/ford-mustang-logo-A837CDD225-seeklogo.com.png" alt="" />
          <p>Ford Mustang</p>
        </div>
        <div className={styles.item}>
          <img src="https://www.freepnglogos.com/uploads/audi-logo-8.png" alt="" />
          <p>Audi</p>
        </div>

        <div className={styles.item}>
          <img src="https://cdn.luxe.digital/media/20231011131837/largest-car-companies-mazda-logo-luxe-digital.png.webp" alt="Mazda" />
          <p>Mazda</p>
        </div>
       
      </div>
    </div>
  )
}

export default Companies