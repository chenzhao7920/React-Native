import React from 'react';
import {TextInput,StyleSheet} from 'react-native';
const Knight = props =>{
        
        let max = 63;
        let col = 8;
        let knight = props;
        let rowNum = knight / 8;
        let colNum = knight % 8;
        bt.setText(String.valueOf(AppFrame.stepCount));
        bt.setEnabled(false);
        bt.setBackground(Color.PINK);
        usedSquare.add(knight);
        Utilities.rmAccess(knight);


        let index;
        for (let i = 0; i < 8; i++) {
            switch (i) {
                case 0:
                    if(rowNum >= 1 && colNum + 2  <= 7 ) {
                        index = (colNum + 2) + (rowNum - 1) * col;
                        Utilities.updateAccess(index);
                        if (index <= max && index >= 0 && AppFrame.alButton.get(index).getText().isEmpty()) {
                            AppFrame.next.add(AppFrame.alButton.get(index));
                        }
                    }
                    break;
                case 1:
                    if(rowNum >= 2 && colNum +1 <= 7){
                        index = (colNum + 1) + (rowNum - 2) * col;
                        Utilities.updateAccess(index);
                        if (index <= max && index >= 0 && AppFrame.alButton.get(index).getText().isEmpty()) {
                            AppFrame.next.add(AppFrame.alButton.get(index));
                        }
                    };
                    break;
                case 2:
                    if(colNum >= 1 && rowNum >= 2) {
                        index = (colNum - 1) + (rowNum - 2) * col;
                        Utilities.updateAccess(index);
                        if (index <= max && index >= 0 && AppFrame.alButton.get(index).getText().isEmpty()) {
                            AppFrame.next.add(AppFrame.alButton.get(index));
                        }
                    }
                    break;
                case 3:
                    if(colNum >= 2 && rowNum >= 1) {
                        index = (colNum - 2) + (rowNum - 1) * col;
                        Utilities.updateAccess(index);
                        if (index <= max && index >= 0 && AppFrame.alButton.get(index).getText().isEmpty()) {
                            AppFrame.next.add(AppFrame.alButton.get(index));
                        }
                    }
                    break;
                case 4:
                    if(colNum >= 2 && rowNum +1 <= 7) {
                        index = (colNum - 2) + (rowNum + 1) * col;
                        Utilities.updateAccess(index);
                        if (index <= max && index >= 0 && AppFrame.alButton.get(index).getText().isEmpty()) {
                            AppFrame.next.add(AppFrame.alButton.get(index));
                        }
                    }
                    break;
                case 5:
                    if(colNum >= 1 && rowNum + 2 <= 7) {
                        index = (colNum - 1) + (rowNum + 2) * col;
                        Utilities.updateAccess(index);
                        if (index <= max && index >= 0 && AppFrame.alButton.get(index).getText().isEmpty()) {
                            AppFrame.next.add(AppFrame.alButton.get(index));
                        }
                    }
                    break;
                case 6:
                    if(colNum+1 <= 7 && rowNum + 2 <= 7) {
                        index = (colNum + 1) + (rowNum + 2) * col;
                        Utilities.updateAccess(index);
                        if (index <= max && index >= 0 && AppFrame.alButton.get(index).getText().isEmpty()) {
                            AppFrame.next.add(AppFrame.alButton.get(index));
                        }
                    }
                    break;
                case 7:
                    if(colNum + 2 <= 7 && rowNum + 1 <= 7) {
                        index = (colNum + 2) + (rowNum + 1) * col;
                        Utilities.updateAccess(index);
                        if (index <= max && index >= 0 && AppFrame.alButton.get(index).getText().isEmpty()) {
                            AppFrame.next.add(AppFrame.alButton.get(index));
                        }
                    }
                    break;
                default:
                    break;
            }

        }
        Utilities.getNextIndex();
        System.out.println("\nAfter set knight the next array store: " );
         
        return (AppFrame.next.size());
}
export default Knight;