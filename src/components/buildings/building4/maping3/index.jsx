import React from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import { MapWrapper, MapWrapperCart, Room } from "../../../../Generic/style";
import BookedRoom from "./booked-room";
import EmptyRoom from "./empty-rooms";
import RoomComponent from "./room";

const Maping3 = () => {
  const queryClinet = useQueryClient();
  const data = queryClinet.getQueryData("accsidint/4");
  const { t } = useTranslation();
  return (
    <MapWrapper>
      {data?.map((item) => (
        <MapWrapperCart key={item._id}>
          <MapWrapperCart.Title>
            {item.roomNumber} {t("building_room.room_1")}
          </MapWrapperCart.Title>
          <MapWrapperCart.Container>
            {item.cliente.map((item) =>
              !item.userID && !item.isBooked ? (
                <EmptyRoom key={item.clienteID} />
              ) : item.userID ? (
                <RoomComponent key={item.clienteID} item={item} />
              ) : (
                <BookedRoom key={item.clienteID} />
              )
            )}
          </MapWrapperCart.Container>
        </MapWrapperCart>
      ))}
    </MapWrapper>
  );
};

export default Maping3;
