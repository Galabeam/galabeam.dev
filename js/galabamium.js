document.addEventListener("DOMContentLoaded", () => {
  const DraggableWindows = document.getElementsByClassName("draggable")

  for (let _ = 0; _ < DraggableWindows.length; _++) {
    DragWindow(DraggableWindows[_])
  }

  function DragWindow(WindowElement) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
    if (document.getElementById(WindowElement.id + "header")) {
      document.getElementById(WindowElement.id + "header").onmousedown = DragMouseDown
    } else {
      WindowElement.onmousedown = DragMouseDown
    }
  
    function DragMouseDown(Obj) {
      Obj = Obj || window.event
      Obj.preventDefault()
  
      pos3 = Obj.clientX
      pos4 = Obj.clientY
      document.onmouseup = EndDragWindow
  
      document.onmousemove = WindowDrag
    }
  
    function WindowDrag(Obj) {
      Obj = Obj || window.event
      Obj.preventDefault()
  
      pos1 = pos3 - Obj.clientX
      pos2 = pos4 - Obj.clientY
      pos3 = Obj.clientX
      pos4 = Obj.clientY
  
      WindowElement.style.top = (WindowElement.offsetTop - pos2) + "px"
      WindowElement.style.left = (WindowElement.offsetLeft - pos1) + "px"
    }
  
    function EndDragWindow() {
      document.onmouseup = null
      document.onmousemove = null
    }
  }
})

function WindowClose(Element) {
  Element.parentElement.parentElement.parentElement.style.display = "none"
}