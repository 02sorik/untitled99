"use client"
import styles from "@/app/styles/home.module.scss";
import {Form} from "@/app/components/form";
import {useState} from "react";
import Image from "next/image";
import image from '../images/123(1).png'
export const HeaderBlock = (props) => {
    const data = props.header_data[0];
    const [state, setState] = useState(false);
    return (
        <div className={styles.header__block}>
            {
                state && (
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div style={{position: "fixed", top: "0", zIndex: "999", background: "#FF8209", cursor: "pointer", borderRadius: "20px", width: "100%", maxWidth: "500px", margin: "20px", padding: "10px", textAlign: "center"}} onClick={() => setState(!state)}>Закрыть</div>
                        <Form/>
                    </div>
                )
            }
                <div className={`${styles.container} ${styles.header__image}`}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>
                            {data.text1} <span className={styles.organe}>{data.text2}</span> {data.text3}
                        </h1>
                        <h2 className={styles.title}>
                            {data.text4} <span className={styles.organe}>{data.text5}</span>
                        </h2>
                        <h3 className={styles.title}>
                            {data.text6} <span className={styles.organe}>{data.text7}</span>, {data.text8}
                        </h3>
                        <button className={styles.order} onClick={()=>setState(!state)}>
                            <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                 viewBox="0 0 496 496" xmlSpace="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M414.56,319.488L352,305.584v-19.768c24.176-17.448,40-45.792,40-77.816v-42.648c1.656-1.64,3.216-3.392,4.552-5.352H408
				h8h16v-16h-16v-16c0-57.24-41.336-106.672-97.048-117.528C316.696,4.376,310.872,0,304,0h-16
				c-6.872,0-12.696,4.376-14.952,10.472C217.336,21.328,176,70.76,176,128v16h-16v16h16h8h11.448c1.344,1.96,2.896,3.72,4.552,5.36
				V208c0,32.024,15.824,60.368,40,77.816v19.768l-62.56,13.904C129.488,330.144,96,371.888,96,421.008V496h400v-74.992
				C496,371.888,462.512,330.144,414.56,319.488z M176,480h-64v-58.992c0-39.856,26.088-73.904,64-84.592V480z M355.872,322.832
				l-29.88,39.848l-21.816-21.816l40.864-20.432L355.872,322.832z M296,327.056l-40-20V295.16c12.192,5.616,25.712,8.84,40,8.84
				c14.288,0,27.808-3.224,40-8.84v11.896L296,327.056z M207.152,148.424L204.944,144H192v-16c0-48.2,33.8-90.104,80-101.064V64h16
				V16h16v48h16V26.936C366.2,37.896,400,79.8,400,128v16h-12.944l-2.208,4.424C381.272,155.56,374.096,160,366.112,160H225.888
				C217.896,160,210.72,155.568,207.152,148.424z M216,174.624c3.168,0.88,6.48,1.376,9.888,1.376h140.216
				c3.408,0,6.72-0.504,9.888-1.376v28.432l-10.688,5.344c-9.936,4.968-21.072,7.6-32.184,7.6H320c-1.336,0-2.512-0.856-2.936-2.12
				l-2.944-8.832C311.504,197.248,304.224,192,296,192s-15.504,5.248-18.128,13.064l-2.928,8.808
				C274.512,215.144,273.336,216,272,216h-13.12c-11.12,0-22.248-2.632-32.192-7.6L216,203.056V174.624z M217.24,221.568
				l2.288,1.144c12.16,6.08,25.768,9.288,39.352,9.288H272c8.224,0,15.504-5.248,18.128-13.064l2.928-8.808
				c0.856-2.544,5.04-2.536,5.88-0.008l2.944,8.832c2.616,7.8,9.896,13.048,18.12,13.048h13.12c13.584,0,27.192-3.208,39.352-9.288
				l2.288-1.144C368.288,259.224,335.48,288,296,288C256.52,288,223.712,259.224,217.24,221.568z M246.96,320.424l40.864,20.432
				l-21.816,21.816l-29.88-39.848L246.96,320.424z M288,480h-96v-16h96V480z M288,448h-96V332.64l26.984-5.992L288,418.664V448z
				 M275.704,375.6L296,355.312l20.296,20.296L296,402.664L275.704,375.6z M400,480h-96v-16h96V480z M400,448h-96v-29.336
				l69.016-92.024l26.984,6V448z M480,480h-64V336.416c37.912,10.688,64,44.744,64,84.592V480z"/>
                                            <path d="M376,128h-48.208c5.08-6.704,8.208-14.96,8.208-24c0-22.056-17.944-40-40-40c-22.056,0-40,17.944-40,40
				c0,9.04,3.128,17.296,8.208,24H216v16h160V128z M296,128c-13.232,0-24-10.768-24-24s10.768-24,24-24s24,10.768,24,24
				S309.232,128,296,128z"/>
                                            <rect x="320" y="416" width="64" height="16"/>
                                            <path d="M120,248v-1.352c0-5.808-1.576-11.504-4.56-16.464L88,184.448l-27.44,45.728C57.576,235.152,56,240.84,56,246.648V248
				c0,17.648,14.352,32,32,32S120,265.648,120,248z M72,248v-1.352c0-2.904,0.792-5.744,2.28-8.232L88,215.552l13.72,22.872
				c1.488,2.48,2.28,5.32,2.28,8.224V248c0,8.824-7.176,16-16,16S72,256.824,72,248z"/>
                                            <path d="M112,328v-20.176c2.384-0.84,4.712-1.808,6.984-2.888l14.272,14.264l33.936-33.944l-14.264-14.272
				c1.08-2.272,2.048-4.608,2.888-6.984H176v-48h-20.176c-0.84-2.376-1.816-4.712-2.888-6.984l14.264-14.272L133.264,160.8
				l-14.272,14.264c-2.272-1.08-4.6-2.048-6.984-2.888V152H64v20.176c-2.384,0.84-4.712,1.808-6.984,2.888L42.744,160.8
				L8.808,194.744l14.264,14.272c-1.08,2.272-2.048,4.608-2.896,6.984H0v48h20.176c0.84,2.376,1.816,4.712,2.888,6.984L8.8,285.256
				L42.736,319.2l14.272-14.264c2.28,1.072,4.608,2.04,6.992,2.888V328H112z M59.608,288.2l-5.344-3.16l-11.52,11.52l-11.312-11.32
				l11.52-11.52l-3.152-5.336c-2.648-4.48-4.656-9.328-5.968-14.4L32.288,248H16v-16h16.288l1.544-6
				c1.312-5.072,3.32-9.92,5.968-14.4l3.152-5.336l-11.52-11.52l11.312-11.32l11.52,11.52l5.344-3.16
				c4.472-2.64,9.312-4.64,14.392-5.952l6-1.536V168h16v16.296l6,1.544c5.08,1.312,9.92,3.312,14.392,5.952l5.344,3.16l11.52-11.52
				l11.312,11.32l-11.52,11.52l3.152,5.336c2.648,4.48,4.656,9.328,5.968,14.4l1.544,5.992H160v16h-16.288l-1.544,6
				c-1.312,5.072-3.32,9.92-5.968,14.4l-3.152,5.336l11.52,11.52l-11.312,11.32l-11.52-11.52l-5.344,3.16
				c-4.472,2.64-9.312,4.64-14.392,5.952l-6,1.536V312H80v-16.296l-6-1.544C68.92,292.84,64.08,290.84,59.608,288.2z"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span>Заказать мастера</span>
                        </button>
                    </div>
                    <div className={styles.image}>
                        <Image src={image} className={styles.imagesrc} alt=""/>
                    </div>
                </div>
            </div>
    )
}