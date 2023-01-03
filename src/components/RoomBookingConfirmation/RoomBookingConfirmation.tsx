import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import { HomepageIcon } from "./HomepageIcon";
import { Rectangle7Icon } from "./Rectangle7Icon";
import { Rectangle19Icon } from "./Rectangle19Icon";
import classes from "./RoomBookingConfirmation.module.css";
import { VectorIcon } from "./VectorIcon";

interface Props {
  className?: string;
}
/* @figmaId 34:1155 */
export const RoomBookingConfirmation: FC<Props> = memo(
  function RoomBookingConfirmation(props = {}) {
    return (
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <div className={classes.homepage}>
          <HomepageIcon className={classes.icon} />
        </div>
        <div className={classes.scroll}>
          <div className={classes.vector}>
            <VectorIcon className={classes.icon2} />
          </div>
          <div className={classes.policiesButton}>Policies</div>
          <div className={classes.contactUsButton}>Contact Us</div>
          <div className={classes.fingerlakesButton}>Fingerlakes</div>
          <div className={classes.image1Button}></div>
          <div className={classes.historyButton}>History</div>
          <div className={classes.reviewsButton}>Reviews</div>
          <div className={classes.roomsButton}>Rooms</div>
          <div className={classes.rectangle7}>
            <Rectangle7Icon className={classes.icon3} />
          </div>
          <div className={classes.summary}>
            <div className={classes.textBlock}>
              Your reservation is all set! The Innkeeper has received your
              reservation and will begin preparing for you arrival. Until then,
              you should receive an email containing important information, such
              as a summary of your reservations and directions to the Inn.
              Please reach out to our Inn staff if you have any of the following
              concerns:
            </div>
            <ul className={classes.list}>
              <li>
                <div className={classes.textBlock2}>
                  <p className={classes.labelWrapper}>
                    <span className={classes.label}>
                      Bringing a pet to the Inn
                    </span>
                  </p>
                </div>
              </li>
            </ul>
            <div className={classes.textBlock3}>Dietary Restrictions</div>
            <div className={classes.textBlock4}>
              <p className={classes.labelWrapper2}></p>
            </div>
            <div className={classes.textBlock5}>
              <p></p>
            </div>
            <div className={classes.textBlock6}>
              <p></p>
            </div>
          </div>
          <div className={classes.cONFNUMBER}>
            Your confirmation number is:{" "}
          </div>
          <div className={classes.cONFNUMBER2}>
            <div className={classes.textBlock7}>
              Please print out or write down this confirmation number. This
              number will be helpful in confirmation your reservation at the
              Yorkshire Inn.
            </div>
            <div className={classes.textBlock8}>
              <p></p>
            </div>
            <div className={classes.textBlock9}>Welcome home!</div>
            <div className={classes.textBlock10}>- Yorkshire Inn Innkeeper</div>
          </div>
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.tOTALDUE}>TOTAL DUE*</div>
          <div className={classes._139320}>$1,393.20</div>
          <div className={classes.nYSSalesTax8}>NYS Sales Tax (8%)</div>
          <div className={classes._6}>6</div>
          <div className={classes._1720}>$17.20</div>
          <div className={classes._10320}>$103.20</div>
          <div className={classes.guest2}>Guest 2</div>
          <div className={classes._62}>6</div>
          <div className={classes._0}>$0.00</div>
          <div className={classes._02}>$0.00</div>
          <div className={classes.guest1}>Guest 1</div>
          <div className={classes._63}>6</div>
          <div className={classes._03}>$0.00</div>
          <div className={classes._04}>$0.00</div>
          <div className={classes.blueRoom}>Blue Room</div>
          <div className={classes._64}>6</div>
          <div className={classes._2150}>$215.00</div>
          <div className={classes._12900}>$1,290.00</div>
          <div className={classes.chargeDescription}>Charge Description</div>
          <div className={classes.numOfNights}>Num. of Nights</div>
          <div className={classes.cost}>Cost</div>
          <div className={classes.total}>Total</div>
          <div className={classes.rectangle19}>
            <Rectangle19Icon className={classes.icon4} />
          </div>
          <div className={classes.gOTOHOMEPAGE}>GO TO HOME PAGE</div>
          <div className={classes.confirmationOfYourReservation}>
            Confirmation of your Reservation
          </div>
          <div className={classes.rectangle11}></div>
          <div className={classes.image1}></div>
          <div className={classes.followUsOnSocialMedia}>
            Follow us on Social Media
          </div>
          <div className={classes.cOPYRIGHT2022THEYORKSHIREINNAL}>
            COPYRIGHT © 2022 THE YORKSHIRE INN - ALL RIGHTS RESERVED.
          </div>
          <div className={classes.homeRoomsHistoryReviewsFingerl}>
            <div className={classes.textBlock11}>Home</div>
            <div className={classes.textBlock12}>Rooms</div>
            <div className={classes.textBlock13}>History</div>
            <div className={classes.textBlock14}>Reviews</div>
            <div className={classes.textBlock15}>Fingerlakes</div>
            <div className={classes.textBlock16}>Policies</div>
            <div className={classes.textBlock17}>Contact</div>
          </div>
          <div className={classes.rectangle12}></div>
          <div className={classes.icons8Instagram961Button}></div>
          <div className={classes.icons8Facebook901Button}></div>
          <div className={classes.icons8Yelp961Button}></div>
        </div>
      </div>
    );
  }
);
