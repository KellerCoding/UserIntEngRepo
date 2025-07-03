import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <table id="mainTable">
            <tbody>
                <tr>
                    <td id="navigation">
                        <table>
                            <tbody>
                                <tr><td><input id="btnNewGame" type="button" name="new" value="New Game"/></td></tr>
                                <tr><td><input id="btnMoveRandomly" type="button" name="moveRandomly" value="Move Randomly"/></td></tr>
                                <tr><td><input id="btnKingRandomly" type="button" name="kingRandomly" value="King Randomly"/></td></tr>
                                <tr><td><input id="btnClear" type="button" name="clear" value="Clear"/></td></tr>
                            </tbody>
                        </table>
                    </td>

                    <td id="content">

                    </td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default App
