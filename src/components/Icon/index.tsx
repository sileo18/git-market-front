import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

type IconProps = PropsWithChildren<{
    name: string;
    size?: number;
}>


const Icons = ({ name }: IconProps) => {
    switch (name) {
        case 'user-alt':
            return <Icon name="user-alt" size={38} color={"#000000"} />
            break;
        case 'user-friends':
            return <Icon name="user-friends" size={44} color={"#000000"} />
            break;
        case 'plus':
            return <Icon name="plus" size={38} color={"#000000"} />
            break;
        case 'wrench':
            return <Icon name="wrench" size={36} color={"#000000"} />
            break;
        case 'ellipsis-v':
            return <Icon name="ellipsis-v" size={28} color={"#000000"} />
            break;
        
        default:
            break
    }
}

export default Icons