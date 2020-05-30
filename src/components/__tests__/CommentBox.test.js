import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'Root'

let wrapped
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    )
})

afterEach(() => {
    wrapped.unmount()
})

it('has an textarea and button', () => {
    expect(wrapped.find("textarea").length).toEqual(1)
    expect(wrapped.find("button").length).toEqual(2)
})

describe('text area' ,() => {

    beforeEach(() => {
        wrapped.find("textarea").simulate('change', {
            target: { value: "new comment" }
        })
    
        wrapped.update()
    })

    it('it has textarea that users can type in', () => {  
        expect(wrapped.find("textarea").prop("value")).toEqual("new comment")
    })
    
    it('when form is submitted textarea is empty', () => {
        wrapped.find("form").simulate("submit")
    
        wrapped.update()
    
        expect(wrapped.find("textarea").prop("value")).toEqual("")
    })
})
