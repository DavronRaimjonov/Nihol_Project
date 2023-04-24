import React from "react";
import { useQueryClient } from "react-query";
import { MapWrapper, MapWrapperCart, Room } from "../../../../Generic/style";
import BookedRoom from "./booked-room";
import EmptyRoom from "./empty-rooms";
import RoomComponent from "./room";

const Maping3 = () => {
  const queryClinet = useQueryClient();
  const { data } = queryClinet.getQueryData("accsidint/4");
  return (
    <MapWrapper>
      {data.data.map((item) => (
        <MapWrapperCart key={item._id}>
          <MapWrapperCart.Title>{item.roomNumber} Room</MapWrapperCart.Title>
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
