/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";

export default function Slider({
    x,
    handle_hover_end,
    set_on_hover,
    active_hovered,
    card_index,
}) {
    React.useEffect(() => { }, [active_hovered]);

    return (
        <div className="item-card-container">
            <HoverVideoPlayer
                onMouseEnter={() => set_on_hover()}
                onMouseLeave={() => handle_hover_end()}
                onTouchStart={() => set_on_hover()}
                onTouchEnd={() => handle_hover_end()}
                videoSrc={x.video}
                pausedOverlay={
                    <div>
                        <div
                            className={`card-overlay ${active_hovered !== card_index && active_hovered !== null
                                    ? "show"
                                    : "hide"
                                }`}
                        ></div>
                        <img
                            src={x.image}
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                }
                loadingOverlay={
                    <div className="loading-overlay">
                        <div className="loading-spinner" />
                    </div>
                }
            />
        </div>
    );
}
