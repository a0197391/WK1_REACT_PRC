import { Row, Col } from "antd";
import style from './footer.module.css'

export default function Footer(){
  return (
    <footer className={style.footer}>
            <div className={style.footerAbove}>
                <div className="container">
                    <Row className={style.footerContent}>
                        <Col lg={{ span: 16 }} span={24} className={style.footerDescription}>
                            臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                        </Col>
                        <Col lg={{ span: 8 }} span={24}>
                            <ul className={style.footerList}>
                                <li className={style.footerItem}><a href="" className={style.footerLink}><i className="fab fa-facebook-f"></i></a></li>
                                <li className={style.footerItem}><a href="" className={style.footerLink}><i className="fab fa-google-plus-g"></i></a></li>
                                <li className={style.footerItem}><a href="" className={style.footerLink}><i className="fab fa-linkedin-in"></i></a></li>

                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className={style.footerBelow}>
                <div className="container">
                    <h6>
                        &copy; Copyright All rights reserved.
                    </h6>
                </div>
            </div>
        </footer>
    );
 }